import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider"; // Import your custom ThemeProvider
import logo from "../public/weblogo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ravan-Creatives",
  icons: {
    icon: logo.src, // Use the logo as the favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* No need to define link tag here, handled in metadata */}</head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
