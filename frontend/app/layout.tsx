import { AuthProvider, useAuth } from "@/context/AuthContext";
import "./globals.css";
import Theme from "@/providers/Theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:bg-gray-900">
        <Theme>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
