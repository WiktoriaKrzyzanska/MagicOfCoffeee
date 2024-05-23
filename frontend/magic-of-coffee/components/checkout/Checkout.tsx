import * as React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Grid, Box, Button, Card, CardContent, Stepper, Step, StepLabel, Stack, Typography, PaletteMode } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './AddressForm';
import getCheckoutTheme from './getCheckoutTheme';
import Info from './Info';
import InfoMobile from './InfoMobile';
import ToggleColorMode from './ToggleColorMode';
import PaymentForm from './PaymentForm';
import './Checkout.css';
import { useTranslations } from 'next-intl';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const logoStyle = {
  width: '140px',
  height: '56px',
  marginLeft: '-4px',
  marginRight: '-8px',
};

function getStepContent(step: number, handleNextStep: () => void) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm onNextStep={handleNextStep} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [mode, setMode] = React.useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(false);
  const checkoutTheme = createTheme(getCheckoutTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const [activeStep, setActiveStep] = React.useState(0);
  const t = useTranslations();
  const steps = [t('shippingAddress'), t('paymentDetails')];
  
  const toggleColorMode = () => {
    setMode((prev: PaletteMode) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? checkoutTheme : defaultTheme}>
      <CssBaseline />
      <Grid container sx={{ height: { xs: '100%', sm: '100dvh' } }}>
        <Grid item xs={12} sm={5} lg={4} sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', backgroundColor: 'background.paper', borderRight: { sm: 'none', md: '1px solid' }, borderColor: { sm: 'none', md: 'divider' }, alignItems: 'start', pt: 4, px: 10, gap: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'end', height: 150 }}>
            <Button startIcon={<ArrowBackRoundedIcon />} component="a" href="/" sx={{ ml: '-8px' }} className="bttn-checkout" color="primary">
            {t('backToMainPage')}
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%', maxWidth: 500 }}>
            <Info totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'} />
          </Box>
        </Grid>
        <Grid item sm={12} md={7} lg={8} sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', width: '100%', backgroundColor: { xs: 'transparent', sm: 'background.default' }, alignItems: 'start', pt: { xs: 2, sm: 4 }, px: { xs: 2, sm: 10 }, gap: { xs: 4, md: 8 } }}>
          <Box sx={{ display: 'flex', justifyContent: { sm: 'space-between', md: 'flex-end' }, alignItems: 'center', width: '100%', maxWidth: { sm: '100%', md: 600 } }}>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <Button startIcon={<ArrowBackRoundedIcon />} component="a" href="/" sx={{ alignSelf: 'start' }}>
              {t('backToMainPage')}
              </Button>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', flexGrow: 1, height: 150 }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
              <Stepper id="desktop-stepper" activeStep={activeStep} sx={{ width: '100%', height: 40 }}>
                {steps.map((label) => (
                  <Step className="step" sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 }, color: '#f8b400' }} key={label}>
                    <StepLabel className="step">{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
          <Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>
            <CardContent sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', ':last-child': { pb: 2 } }}>
              <div>
                <Typography variant="subtitle2" gutterBottom>
                {t('selectedProducts')}
                </Typography>
                <Typography variant="body1">{activeStep >= 2 ? '$144.97' : '$134.98'}</Typography>
              </div>
              <InfoMobile totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'} />
            </CardContent>
          </Card>
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%', maxWidth: { sm: '100%', md: 600 }, maxHeight: '720px', gap: { xs: 5, md: 'none' } }}>
            <Stepper id="mobile-stepper" activeStep={activeStep} alternativeLabel sx={{ display: { sm: 'flex', md: 'none' } }}>
              {steps.map((label) => (
                <Step sx={{ ':first-child': { pl: 0 }, ':last-child': { pr: 0 }, '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } } }} key={label}>
                  <StepLabel sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Stack spacing={2} useFlexGap>
                <Typography variant="h1">📦</Typography>
                <Typography variant="h5">{t('thankYou')}</Typography>
                <Typography variant="body1" color="text.secondary">
                {t('orderNumber')}
                  <strong>&nbsp;#140396</strong>.{t('orderConfirmation')}
                </Typography>
              </Stack>
            ) : (
              <React.Fragment>
                <Elements stripe={stripePromise}>
                  {getStepContent(activeStep, handleNext)}
                </Elements>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end', alignItems: 'end', flexGrow: 1, gap: 1, pb: { xs: 12, sm: 0 }, mt: { xs: 2, sm: 0 }, mb: '60px' }}>
                  {activeStep !== 0 && (
                    <Button className="bttn-checkout" startIcon={<ChevronLeftRoundedIcon />} onClick={handleBack} variant="text" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                       {t('previous')}
                    </Button>
                  )}
                  {activeStep !== 0 && (
                    <Button startIcon={<ChevronLeftRoundedIcon />} onClick={handleBack} variant="outlined" fullWidth sx={{ display: { xs: 'flex', sm: 'none' } }}>
                       {t('previous')}
                    </Button>
                  )}
                  <Button variant="contained" className="bbttn-checkout" endIcon={<ChevronRightRoundedIcon />} onClick={handleNext} sx={{ width: { xs: '100%', sm: 'fit-content' } }}>
                    {activeStep === steps.length - 1 ? t('placeOrder') : t('next')}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
// export async function getStaticProps(context: { locale: any; }) {
//   return {
//     props: {
//       messages: (await import(`../messeges/${context.locale}.json`)).default
//     }
//   };
// }

