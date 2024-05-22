import * as React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button, Box, Typography, FormControlLabel, Checkbox, Card, CardActionArea, CardContent, RadioGroup, FormControl, Alert, Stack } from '@mui/material';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { styled } from '@mui/system';

const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

interface PaymentFormProps {
  onNextStep: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onNextStep }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentType, setPaymentType] = React.useState('creditCard');

  const handlePaymentTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.createToken(elements.getElement(CardElement)!);

    if (error) {
      console.error(error);
    } else {

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
        <FormControl component="fieldset" fullWidth>
          <RadioGroup
            aria-label="Payment options"
            name="paymentType"
            value={paymentType}
            onChange={handlePaymentTypeChange}
            sx={{
              flexDirection: { sm: 'column', md: 'row' },
              gap: 2,
            }}
          >
            <Card
              raised={paymentType === 'creditCard'}
              sx={{
                maxWidth: { sm: '100%', md: '50%' },
                flexGrow: 1,
                outline: '1px solid',
                outlineColor:
                  paymentType === 'creditCard' ? 'primary.main' : 'divider',
                backgroundColor:
                  paymentType === 'creditCard' ? 'background.default' : '',
              }}
            >
              <CardActionArea onClick={() => setPaymentType('creditCard')}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CreditCardRoundedIcon color="primary" fontSize="small" />
                  <Typography fontWeight="medium">Card</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              raised={paymentType === 'bankTransfer'}
              sx={{
                maxWidth: { sm: '100%', md: '50%' },
                flexGrow: 1,
                outline: '1px solid',
                outlineColor:
                  paymentType === 'bankTransfer' ? 'primary.main' : 'divider',
                backgroundColor:
                  paymentType === 'bankTransfer' ? 'background.default' : '',
              }}
            >
              <CardActionArea onClick={() => setPaymentType('bankTransfer')}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <AccountBalanceRoundedIcon color="primary" fontSize="small" />
                  <Typography fontWeight="medium">Bank account</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </RadioGroup>
        </FormControl>
        {paymentType === 'creditCard' && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 3,
                height: { xs: 300, sm: 350, md: 375 },
                width: '100%',
                borderRadius: '20px',
                border: '1px solid ',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle2">Credit card</Typography>
                <CreditCardRoundedIcon sx={{ color: 'text.secondary' }} />
              </Box>
              <Box sx={{ margin: '20px 0' }}>
                <CardElement options={{ hidePostalCode: true }} />
              </Box>
            </Box>
            <FormControlLabel
              control={<Checkbox name="saveCard" />}
              label="Remember credit card details for next time"
            />
            <Button type="submit" variant="contained" disabled={!stripe || !elements}>
              Pay
            </Button>
          </Box>
        )}
        {paymentType === 'bankTransfer' && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Alert severity="warning" icon={<WarningRoundedIcon />}>
              Your order will be processed once we receive the funds.
            </Alert>
            <Typography variant="subtitle1" fontWeight="medium">
              Bank account
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please transfer the payment to the bank account details shown below.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography variant="body1" color="text.secondary">
                Bank:
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                Mastercredit
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography variant="body1" color="text.secondary">
                Account number:
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                123456789
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Typography variant="body1" color="text.secondary">
                Routing number:
              </Typography>
              <Typography variant="body1" fontWeight="medium">
                987654321
              </Typography>
            </Box>
          </Box>
        )}
      </Stack>
    </form>
  );
};

export default PaymentForm;
