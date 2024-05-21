import styles from './page.module.css';
import CardGrid from '@/components/CardGrid';
import CardsProvider from '@/providers/CardsProvider';

export default function Home() {
  return (
    <CardsProvider>
      <main className={ styles.main }>
        <h1>Mr. Loyal</h1>
        <CardGrid/>
      </main>
    </CardsProvider>
  );
}
