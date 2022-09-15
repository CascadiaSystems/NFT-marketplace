import { NextSeo } from 'next-seo';
import React from 'react';

import Header from './header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <NextSeo title='Sophon Foundation' description='NFT marketplace' />
      <Header />
      {children}
    </>
  );
};

export default Layout;
