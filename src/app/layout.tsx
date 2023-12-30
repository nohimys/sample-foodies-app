import type { Metadata } from 'next'
import './globals.css'
import React from "react";
import MainHeader from "@/components/main-header";

export const metadata: Metadata = {
  title: 'Sample Foodie Application',
  description: 'Delicious meals, shared by a food-loving community',
}

export default function RootLayout({children}:
{ children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <MainHeader/>
      {children}
      </body>
      </html>
  );
}