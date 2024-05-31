import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WinSizeContextProvider } from "./contexts/winSizeContext";
import { IsLoadingContextProvider } from "./contexts/isLoadingContext";
import { NotifyContextProvider } from "./contexts/notifyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <IsLoadingContextProvider>
          <NotifyContextProvider>
            <WinSizeContextProvider>
              {children}
            </WinSizeContextProvider>
          </NotifyContextProvider>
        </IsLoadingContextProvider>
      </body>
    </html>
  );
}
