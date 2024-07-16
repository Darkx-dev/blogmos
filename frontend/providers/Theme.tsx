import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
