import { AboutUs } from './AboutUs/AboutUs';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
      </main>
    </>
  );
}
