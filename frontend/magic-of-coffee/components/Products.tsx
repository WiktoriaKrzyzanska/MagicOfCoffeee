import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  availability: boolean;
  rating: string;
  countryOfOrigin: string;
  levelOfBitterness: number;
  taste: string;
  imageBase64?: string;  
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:8082/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {product.imageBase64 ? (
                  <img
                    src={`data:image/jpeg;base64,${product.imageBase64}`}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-400 flex items-center justify-center">
                    No image available
                  </div>
                )}
              </div>
              <div className="mt-4 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      {product.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                </div>
                <div>
                  <p className="text-sm">{product.availability ? 'Available' : 'Unavailable'}</p>
                  <p className="text-sm">Rating: {product.rating} / 5</p>
                  <p className="text-sm">Origin: {product.countryOfOrigin}</p>
                  <p className="text-sm">Bitterness: {product.levelOfBitterness} / 10</p>
                  <p className="text-sm">Taste: {product.taste}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
