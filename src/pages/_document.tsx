import React from 'react';

import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          // eslint-disable-next-line
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Slocklance product presentation." />
          <meta name="robots" content="index, follow" />
          <title>Nani Tech</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
