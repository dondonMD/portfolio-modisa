"use client";
import React from "react";
import ClientWrapper from "src/app/ClientWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ClientWrapper />
        {children}
      </body>
    </html>
  );
}
