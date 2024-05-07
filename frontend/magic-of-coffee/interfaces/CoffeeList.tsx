interface Coffee {
    id: number;
    name: string;
    price: number;
    rating: number;
}

interface Country {
    id: number;
    name: string;
}

interface CountryDetails {
    country: Country | undefined;
    coffees: Coffee[];
}