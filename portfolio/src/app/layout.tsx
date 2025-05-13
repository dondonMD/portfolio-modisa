// app/layout.tsx
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThreeSceneWrapper from "@/app/ThreeSceneWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <ThreeSceneWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}