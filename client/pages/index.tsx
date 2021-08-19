import type { NextPage } from 'next'
import HeroCarousel from "../components/common/HeroCarousel";


const Home: NextPage = () =>
  <HeroCarousel>
    <img
      src="assets/neon_starwars.jpg"
      width="100%"
      height="100%"
    />
    <img
      src="assets/hero_4.jpg"
      width="100%"
      height="100%"
    />
    <img
      src="assets/neon_imperial.jpg"
      width="100%"
      height="100%"
    />
  </HeroCarousel>;

export default Home
