import styles from "./page.module.css";
import CardData from "@/model/CardData";
import {BarcodeType} from "@/constants/BarcodeType";
import CardGrid from "@/components/CardGrid";

const CARDS: CardData[] = [
    {
        id: '1',
        name: 'Card 1',
        barcode: '1234567890',
        barcodeType: BarcodeType.EAN13,
    },
    {
        id: '2',
        name: 'Card 3',
        barcode: '1234567890',
        barcodeType: BarcodeType.EAN13,
    },
    {
        id: '3',
        name: 'Card 3',
        barcode: '1234567890',
        barcodeType: BarcodeType.EAN13,
    },
    {
        id: '4',
        name: 'Card 4',
        barcode: '1234567890',
        barcodeType: BarcodeType.EAN13,
    },
]

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Mr. Loyal</h1>
            <CardGrid cards={CARDS} />
        </main>
    );
}
