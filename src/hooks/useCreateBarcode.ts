import React from 'react';
import JsBarcode, { Options } from 'jsbarcode';
import { BarcodeConfig } from '@/model/BarcodeConfig';

const useCreateBarcode = (containerRef: React.MutableRefObject<any>, barcode: string, barcodeType: string, config: BarcodeConfig) => {

  React.useEffect(() => {
    const options: Options = {
      format: barcodeType,
      background: 'transparent',
      lineColor: config.lineColor,
      width: config.width,
      height: config.height,
    }
    JsBarcode(containerRef.current, barcode, options);
  }, [ barcode, barcodeType, containerRef, config ]);
};

export default useCreateBarcode;
