import styles from './page.module.css';
import CardData from '@/model/CardData';
import { BarcodeType } from '@/constants/BarcodeType';
import CardGrid from '@/components/CardGrid';

const CARDS: CardData[] = [
  {
    id: '1',
    name: 'Card 1',
    barcode: '5901234123457',
    barcodeType: BarcodeType.EAN13,
  },
  {
    id: '2',
    name: 'Card 2',
    barcode: '5901234123457',
    barcodeType: BarcodeType.CODE128,
  },
  {
    id: '3',
    name: 'Card 3',
    barcode: '5901234123457',
    barcodeType: BarcodeType.CODE39,
  },
  {
    id: '4',
    name: 'Card 4',
    barcode: '5901234123457',
    barcodeType: BarcodeType.ITF14,
  },
]

export default function Home() {
  return (
    <main className={ styles.main }>
      <h1>Mr. Loyal</h1>
      <CardGrid cards={ CARDS }/>
    </main>
  );
}
