import { Html, Head, Main, NextScript } from 'next/document';

/** Custom document for shared metadata and fonts */

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Shade&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
