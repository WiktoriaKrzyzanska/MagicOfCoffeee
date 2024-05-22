import React, { useState, ChangeEvent } from 'react';

type FormData = {
    name: string;
    description: string;
    price: string;
    availability: boolean;
    rating: string;
    countryOfOrigin: string;
    levelOfBitterness: string;
    taste: string;
    quantity: string; 
    image?: File;
};

function AdminAdd() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        description: '',
        price: '',
        availability: true,
        rating: '',
        countryOfOrigin: '',
        levelOfBitterness: '',
        taste: '',
        quantity: '', 
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked, files } = event.target;
        if (type === 'file' && files) {
            setFormData(prev => ({
                ...prev,
                [name]: files[0],
            }));
        } else if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach(key => {
            const value = formData[key];
            if (value instanceof File) {
                data.append(key, value);
            } else if (typeof value === 'boolean') {
                data.append(key, value.toString());
            } else {
                data.append(key, value); 
            }
        });

        fetch('http://localhost:8082/api/products/add', {
            method: 'POST',
            body: data,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Product added successfully!');
            setFormData({
                name: '',
                description: '',
                price: '',
                availability: true,
                rating: '',
                countryOfOrigin: '',
                levelOfBitterness: '',
                taste: '',
                quantity: '',
                image: undefined,
            }); 
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error adding product');
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                step="0.01"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
            />
            <label>
                Availability:
                <input
                    type="checkbox"
                    name="availability"
                    checked={formData.availability}
                    onChange={handleChange}
                />
            </label>
            <input
                type="number"
                step="0.1"
                name="rating"
                placeholder="Rating"
                value={formData.rating}
                onChange={handleChange}
            />
            <input
                type="text"
                name="countryOfOrigin"
                placeholder="Country of Origin"
                value={formData.countryOfOrigin}
                onChange={handleChange}
            />
            <input
                type="number"
                name="levelOfBitterness"
                placeholder="Level of Bitterness"
                value={formData.levelOfBitterness}
                onChange={handleChange}
            />
            <input
                type="text"
                name="taste"
                placeholder="Taste"
                value={formData.taste}
                onChange={handleChange}
            />
            <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
            />
            <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
            />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AdminAdd
