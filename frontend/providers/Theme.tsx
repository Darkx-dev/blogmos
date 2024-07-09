import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
