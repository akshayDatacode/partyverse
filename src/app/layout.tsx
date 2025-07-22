// This is still a Server Component

import axios from "axios";
import { setupAxios } from "@/core/auth/AuthHelpers";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/scss/style.scss';
import '@/assets/scss/landingpage.scss';
import '@/assets/scss/venueList.scss';
import 'react-toastify/dist/ReactToastify.css';

import Providers from "@/core/Providers";
import ShowHeaderAndFooter from "@/components/ShowHeaderAndFooter"; // ✅ Import the new client component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Partyverse Next App",
  description: "Created by Datacode",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com',
    timeout: 10000,
  });
  setupAxios(axiosInstance);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <ShowHeaderAndFooter>{children}</ShowHeaderAndFooter> {/* ✅ Wrap in client component */}
        </Providers>
      </body>
    </html>
  );
}
