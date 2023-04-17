import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { QuoteSession } from "./pages/Quote";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <QuoteSession />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}
