import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoffeeListComponent from './CoffeListComponent';
import './InfoPanel.css'
import { useTranslations } from 'next-intl';
function calculateCentroid(coordinates: any[]) {
  let area = 0;
  let latitude = 0;
  let longitude = 0;
  const numCoordinates = coordinates.length;

  coordinates.forEach((coord, index) => {
    const [lat1, lon1] = coord;
    const [lat2, lon2] = coordinates[(index + 1) % numCoordinates];
    const a = lat1 * lon2 - lat2 * lon1;
    area += a;
    latitude += (lat1 + lat2) * a;
    longitude += (lon1 + lon2) * a;
  });

  area = area / 2;
  latitude = latitude / (6 * area);
  longitude = longitude / (6 * area);
  return [longitude, latitude];
}


const InfoPanel: React.FC<InfoPanelProps> = ({ country}) => {
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [currency, setCurrency] = useState<CurrencyInfo | null>(null);
  const [countryDetails, setCountryDetails] = useState(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryId, setCountryId] = useState(null);
  const t = useTranslations();  

  useEffect(() => {
    
    if (country?.properties?.NAME == null) {
      
    }else{
      const url = `http://localhost:8082/api/country-id?name=${encodeURIComponent(country?.properties?.NAME)}`;
        axios.get(url)
            .then(response => {
                setCountryId(response.data.id);
            })
            .catch(error => {
                console.error('Error fetching country ID:', error);
            });
    }
}, [country?.properties?.NAME]);

  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:8082/api/countries');
        setCountries(response.data);
      } catch (error) {
        console.error('Failed to fetch countries', error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    if (country) {
      const [lon, lat] = calculateCentroid(country.geometry.coordinates[0]);
      const apiKey = 'f25f7635f6564be095194125240705'; 
      const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;

      axios.get(weatherUrl)
        .then(response => {
          const { current } = response.data;
          if (current) {
            setWeather({
              temperature: current.temp_c,
              weather_description: current.condition.text
            });
          } else {
            console.error('No current weather data available');
          }
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });

      const currencyUrl = `https://restcountries.com/v3.1/name/${country.properties.NAME}?fullText=true`;
      axios.get(currencyUrl)
        .then(response => {
          const { currencies } = response.data[0];
          const currencyCode = Object.keys(currencies)[0];
          const { name, symbol } = currencies[currencyCode];
          setCurrency({
            code: currencyCode,
            name,
            symbol
          });
        })
        .catch(error => {
          console.error('Error fetching currency data:', error);
        });
        const countryIDsUrl = `http://localhost:8082/api/countries`;

        axios.get(countryIDsUrl)
        .then(response => {
            setCountryDetails(response.data);
        })
        .catch(error => {
            console.error('Error fetching country details:', error);
        });
    }
}, [country]);
useEffect(() => {
  const url = `http://localhost:8082/api/countries/${countryId}/details`;
  if(countryId == null){
  }else{
    axios.get(url)
    .then(response => {
      setCountryDetails(response.data);
    })
    .catch(error => {
      console.error('Error fetching country details:', error);
    });
  }
  
});

if (!country) return <div className="select-country">{t('mapselect')}</div>;

  return (
    <div className="info-panel">
       <div className="info-block">
      <h1>{country.properties.NAME}</h1>
      </div>
      {weather && (
         <div className="info-block">
         <h2>{t('mapweather')}</h2>
         <p>{t('temp')}{weather.temperature}°C</p>
         <p>{t('desc')}{weather.weather_description}</p>
       </div>
     )}
     {currency && (
       <div className="info-block">
         <h2>{t('curr')}</h2>
         <p>{t('mapname')}{currency.name}</p>
         <p>{t('mapcode')}{currency.code}</p>
         <p>Symbol: {currency.symbol}</p>
       </div>
      )}
      <div className="info-block">
      {countryDetails && <CoffeeListComponent countryDetails={countryDetails} />}
      </div>
    </div>
  );
}

export default InfoPanel;
