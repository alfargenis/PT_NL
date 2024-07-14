import { FirtsCard } from '../FirtsCard';
import { FiveCard } from '../FiveCard';
import { FourCard } from '../FourCard';
import { MenuLateral } from '../MenuLateral';
import { Navbar } from '../Navbar';
import { SecondCard } from '../SecondCard';
import { SevenCard } from '../SevenCard';
import { SixCard } from '../SixCard';
import { ThreeCard } from '../ThreeCard';

function Main() {
  return (
    <main>
      <MenuLateral />
      <Navbar />
      <FirtsCard />
      <SecondCard />
      <ThreeCard />
      <FourCard />
      <FiveCard />
      <SixCard />
      <SevenCard />
    </main>
  );
}

export { Main };
