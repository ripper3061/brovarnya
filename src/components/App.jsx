import { AboutUs } from './AboutUs/AboutUs';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { Prices } from './Prices/Prices';
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Prices />
      </main>
    </>
  );
}
