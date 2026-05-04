import { Metadata } from 'next';
import React from 'react';

import '../styles/globals.css';
import { ThemeProvider } from '@atoms/ThemeProvider';

import Footer from '../components/molecules/Footer';
import Header from '../components/organisms/Header';
import { websiteConfig } from '../website.config';

export const metadata: Metadata = {
  title: websiteConfig.title,
  description: websiteConfig.description,
  verification: {
    google: 'SNTYQWBQrj5egt0wlpPvuroVwTbFCmYdLowNeDC4o5w',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={websiteConfig.font_variables.join(' ') + ' jemore-theme-light'}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          themes={websiteConfig.color_themes}
        >
          {/* Sfondo gestito via CSS in globals.css */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
