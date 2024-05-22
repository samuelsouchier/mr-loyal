import styles from './page.module.css';
import CardGrid from '@/components/CardGrid';
import CardsProvider from '@/providers/CardsProvider';
import Header from '@/components/Header';

export default function Home() {
  return (
    <CardsProvider>
      <main className={ styles.main }>
        <Header/>
        <CardGrid/>
      </main>
    </CardsProvider>
  );
}
