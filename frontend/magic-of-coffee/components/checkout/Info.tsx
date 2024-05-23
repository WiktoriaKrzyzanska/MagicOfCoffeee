import * as React from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';

interface Product {
  id: number;
  name: string;
  desc: string;
  price: number; 
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface InfoProps {}

export default function Info({}: InfoProps) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = React.useState<string>('0');
  const [userId, setUserId] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchUserIdAndCartItems = async () => {
      try {
        const token = localStorage.getItem('token'); 
        if (!token) {
          console.error('No token found');
          return;
        }

        const userIdResponse = await axios.get<number>('http://localhost:8082/user/id', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userId = userIdResponse.data;
        setUserId(userId);

        const cartResponse = await axios.get<{ items: CartItem[]; totalPrice: number }>(
          `http://localhost:8082/coffee/cart/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartItems(cartResponse.data.items);
        setTotalPrice(cartResponse.data.totalPrice.toFixed(2)); 
      } catch (error) {
        console.error('Failed to fetch user ID or cart items:', error);
      }
    };

    fetchUserIdAndCartItems();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="subtitle2" color="text.secondary">
        Total
      </Typography>
      <Typography variant="h4" gutterBottom>
        ${totalPrice}
      </Typography>
    </React.Fragment>
  );
}
