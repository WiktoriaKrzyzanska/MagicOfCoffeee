import * as React from 'react';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslations } from 'next-intl';
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];


export default function Review() {
  const t = useTranslations();
  const payments = [
    { name: t('cardType'), detail: 'Visa' },
    { name: t('cardHolder'), detail: 'Mr. John Smith' },
    { name: t('cardNumber'), detail: 'xxxx-xxxx-xxxx-1234' },
    { name: t('expiryDate'), detail: '04/2024' },
  ];
  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={t('products')} secondary="4 selected" />
          <Typography variant="body2">$134.98</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={t('shipping')} secondary={t('plusTaxes')} />
          <Typography variant="body2">$9.99</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={t('total')}/>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $144.97
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}
      >
        <div>
          <Typography variant="subtitle2" gutterBottom>
          {t('shipmentDetails')}
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography color="text.secondary" gutterBottom>
            {addresses.join(', ')}
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
          {t('paymentDetails')}
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: '100%', mb: 1 }}
                >
                  <Typography variant="body1" color="text.secondary">
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}