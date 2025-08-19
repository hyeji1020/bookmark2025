import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import {BookmarkIcon} from 'lucide-react';
import Nav from './Nav';
import { auth } from '@/lib/auth';
import { SessionProvider } from 'next-auth/react';
import { use } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Book & Mark',
  description: 'Social Bookmark Service',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = use(auth());

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
        >

        <SessionProvider session={session}>
          <div className='flex flex-col container justify-center mx-auto'>
            <header className='flex justify-between mt-5 mb-5'>
              <Link href="/" 
              className="text-3xl flex items-center tracking-tight text-cyan-400 dark:text-cyan-200 
              font-bold">
                <BookmarkIcon />
                Book & Mark
              </Link>
              <Nav/>
            </header>
            <main className='flex-1 mx-auto'>{children}</main>
            <footer className='text-center text-cyan-400 dark:text-cyan-200'>&#169; hyeji 2025</footer>
          </div>
        </SessionProvider>
    </ThemeProvider>
      </body>
    </html>
  );
}
