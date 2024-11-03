// pages/_app.tsx
import type { AppProps } from 'next/app';
import { AppProvider } from '../context/AppContext';
import { CssBaseline } from '@mui/material';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </AppProvider>
  );
}
