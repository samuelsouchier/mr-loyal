import {BarcodeType} from "@/constants/BarcodeType";

type CardData = {
    id: string;
    name: string;
    barcode: string;
    barcodeType: BarcodeType;
}

export default CardData;
