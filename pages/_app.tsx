import 'normalize.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

/** Custom Next.js App wrapper */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
