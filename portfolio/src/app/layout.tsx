import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./components/ThreeScene'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-gradient-to-b from-background-light to-primary-light/10 dark:from-background-dark dark:to-primary-dark/10" />
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Scene />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}