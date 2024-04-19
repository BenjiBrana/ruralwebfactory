import Head from 'next/head';
import './globals.css';
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import FilAriane from '@/components/FilAriane/FilAriane';
import ArrowTop from '@/components/ArrowTop/ArrowTop';

export const metadata = {
  title: 'Rural Web Factory - Solutions Web Innovantes',
  description:
    'La Rural Web Factory propose des services numériques complets, incluant la transformation numérique, les audits, le webmarketing, la publicité, le branding, le développement web et le community management.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="canonical" href="https://ccp1-brana.vercel.app/" />
        <meta
          property="og:title"
          content="Rural Web Factory - Solutions Web Innovantes"
        />
        <meta
          property="og:description"
          content="La Rural Web Factory propose des services numériques complets, incluant la transformation numérique, les audits, le webmarketing, la publicité, le branding, le développement web et le community management."
        />
        <meta
          property="og:image"
          content="https://ccp1-brana.vercel.app/_next/image?url=%2Flogo%2Fcircle_rwf.webp&w=96&q=75"
        />
        <meta
          property="og:url"
          content="https://ccp1-brana.vercel.app/"
        />
      </Head>
      <body
        id="top"
        className="changeMode font-textFont text-textColor bg-primary"
      >
        <Header />
        <FilAriane />
        <ArrowTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
