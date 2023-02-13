"use client";

import FAB from "@/components/FAB";
import "../styles/main.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleClick = () => {
    console.log("fab clicked");
  };
  return (
    <html lang="en">
      <head />
      <body className="app">
        <main className="app-container">
          <h1 className="app-title">Tasks</h1>
          {children}
          <FAB handleClick={handleClick} />
        </main>
      </body>
    </html>
  );
}
