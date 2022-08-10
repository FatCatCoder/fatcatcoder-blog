import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
    return (
      <Html>
        <Head />
        <body className={`${pageProps} dark:bg-gray-900 bg-white text-black max-w-100`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}