import React, { useEffect } from 'react';
// eslint-disable-next-line import/order
import * as Sentry from '@sentry/node';

import 'scroll-behavior-polyfill';
import '@/assets/css/index.css';

import Head from 'next/head';

import { AdminBar } from '@tager/web-panel';
import { useAnalytics } from '@tager/web-analytics';
import {
  getSearchParamsFromUrl,
  useFixedVhProperty,
  useIsomorphicLayoutEffect,
  useMedia,
  useProgressBar,
} from '@tager/web-core';
import { createMediaQuery, ModalProvider } from '@tager/web-components';

import withRedux from '@/hocs/withRedux';
import withPerfLogs from '@/hocs/withPerfLogs';
import { CustomApp_Component } from '@/typings/hocs';
import { breakpoints } from '@/constants/theme';

Sentry.init({
  enabled:
    process.env.NODE_ENV === 'production' &&
    process.env.NEXT_PUBLIC_ENV !== 'local',
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: [
    process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    process.env.NEXT_PUBLIC_ENV,
  ].join('_'),
});

/**
 * Custom App documentation
 * https://nextjs.org/docs/advanced-features/custom-app
 */
const CustomApp: CustomApp_Component = (props) => {
  useProgressBar({ showSpinner: false });

  useAnalytics();
  useFixedVhProperty();

  const { Component, pageProps } = props;

  // Workaround for https://github.com/zeit/next.js/issues/8592
  // @ts-ignore
  const { err } = props;
  const modifiedPageProps = { ...pageProps, err };

  const isMobile = useMedia(
    createMediaQuery({
      max: breakpoints.tabletSmall,
    })
  );

  useEffect(() => {
    const searchParams = getSearchParamsFromUrl(document.location.href);
    const scrollParam = searchParams.get('scroll');
    if (scrollParam) {
      const targetElement = document.getElementById(scrollParam);
      if (targetElement) {
        window.scroll({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  });

  useIsomorphicLayoutEffect(() => {
    function updateVhProperty() {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
      });
    }

    updateVhProperty();

    window.addEventListener('orientationchange', updateVhProperty);

    if (isMobile) {
      window.removeEventListener('resize', updateVhProperty);
    } else {
      window.addEventListener('resize', updateVhProperty);
    }

    return () => {
      window.removeEventListener('orientationchange', updateVhProperty);
      window.removeEventListener('resize', updateVhProperty);
    };
  }, [isMobile]);

  useEffect(() => {
    updateContainerHeight();

    function updateContainerHeight() {
      document.body.style.height = `${window.innerHeight}px`;
    }

    window.addEventListener('resize', updateContainerHeight);
    return () => window.removeEventListener('resize', updateContainerHeight);
  }, []);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <AdminBar />
      <ModalProvider>
        <Component {...modifiedPageProps} />
      </ModalProvider>
    </>
  );
};

/**
 * Only use this method if you have blocking data requirements for
 * every single page in your application. This disables the ability to
 * perform automatic static optimization, causing every page in your app to
 * be server-side rendered.
 *
 * Reference: https://nextjs.org/docs/advanced-features/custom-app
 */
// CustomApp.getInitialProps = async (appContext) => {
//   /** calls page's `getInitialProps` and fills `appProps.pageProps` */
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps };
// };

export default withRedux(withPerfLogs(CustomApp));
