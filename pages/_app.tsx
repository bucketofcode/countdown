
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import '../styles.css'


class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (   
            
            <React.Fragment>
                <Head>
                    <title>Big Day Countdown</title>
                    <meta charSet="utf-8" />
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        as="stylesheet"
                        crossOrigin=""
                    />
                </Head>
                {/* Components class extends App component and passes everything down from App to other pages in the app */ }
                <Component {...pageProps} />  
            </React.Fragment>
         );
    }
  }
  
  export default MyApp;