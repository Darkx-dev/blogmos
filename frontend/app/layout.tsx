import { AuthProvider, useAuth } from "@/context/AuthContext";
import "./globals.css";
import Header from "@/components/header/Header";
import Theme from "@/providers/Theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
