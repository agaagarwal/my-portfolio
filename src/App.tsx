import Hero from './components/Hero';
import Projects from './components/Projects';
import PersonalSpace from './components/PersonalSpace';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <PersonalSpace />
        <Footer />
      </main>
    </>
  );
}
