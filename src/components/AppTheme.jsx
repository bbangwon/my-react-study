import { ThemeProvider } from "../contexts/ThemeContext";
import Parent from "./Parent";

import "../styles/AppTheme.css";

function AppTheme() {
  return (
    <ThemeProvider>
      <Parent></Parent>
    </ThemeProvider>
  );
}

export default AppTheme;
