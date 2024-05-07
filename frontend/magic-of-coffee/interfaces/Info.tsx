
interface WeatherInfo {
    temperature: string;
    weather_description: string;
  }
  
  interface CurrencyInfo {
    code: string;
    name: string;
    symbol: string;
  }
  
  interface Country {
    properties: {
      ID: string;
      NAME: string;
    };
    geometry: {
      coordinates: number[][][];
    };
  }
  interface CountryCurrent {
    id: string;
    name: string;
  }
  interface InfoPanelProps {
   country: Country ;
  }