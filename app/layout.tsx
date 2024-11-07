// app/layout.tsx
"use client";
import { AppProvider } from './context/AppContext'; 
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../app/createEmotionCache';
import localFont from "next/font/local";
import "./styles/globals.css";
import Navbar from "./components/Nav/NavBar"; 

// Font definitions
const geistSans = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



const clientSideEmotionCache = createEmotionCache();  // Initialize Emotion cache

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>

        <title>Next Boiler Plate</title>
        <meta name="description" content="Some bones for Next App" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CacheProvider value={clientSideEmotionCache}>
          <AppProvider>
            <CssBaseline />
            <Navbar />
            <main>{children}</main>
          </AppProvider>
        </CacheProvider>
      </body>
    </html>
  );
}

