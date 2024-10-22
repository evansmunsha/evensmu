import { Toaster } from "@/components/ui/toaster";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import { constructMetadata } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"
import SessionProvider from "./(main)/SessionProvider";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata = constructMetadata()

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");
  return (
    <SessionProvider value={session}>

      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
          <ReactQueryProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Analytics />
            </ThemeProvider>
          </ReactQueryProvider>
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
