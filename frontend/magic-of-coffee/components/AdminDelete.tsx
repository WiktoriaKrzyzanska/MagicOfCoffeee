import React, { useState, useEffect } from 'react';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    availability: boolean;
    rating: number;
    countryOfOrigin: string;
    levelOfBitterness: number;
    taste: string;
    quantity: number; 
    imageBase64?: string;
};

function ProductManager() {
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = () => {
        fetch('http://localhost:8082/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleDelete = (id: number) => {
        fetch(`http://localhost:8082/api/products/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            alert('Product quantity decreased by 1!');
            fetchProducts();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error decreasing product quantity');
        });
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <p>Available: {product.availability ? 'Yes' : 'No'}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Country of Origin: {product.countryOfOrigin}</p>
                        <p>Level of Bitterness: {product.levelOfBitterness}</p>
                        <p>Taste: {product.taste}</p>
                        <p>Quantity: {product.quantity}</p>
                        {product.imageBase64 && (
                            <img
                                src={`data:image/jpeg;base64,${product.imageBase64}`}
                                alt={product.name}
                                width="100"
                                height="100"
                            />
                        )}
                        <button onClick={() => handleDelete(product.id)}>Decrease Quantity</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductManager;
