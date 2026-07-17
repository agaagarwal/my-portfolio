import Hero from './components/Hero';
import Projects from './components/Projects';
import PersonalSpace from './components/PersonalSpace';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Hero />
      <main>
        <Projects />
        <PersonalSpace />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
