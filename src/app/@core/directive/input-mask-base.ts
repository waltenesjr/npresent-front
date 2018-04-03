import {Input} from '@angular/core';
// TODO Verificar erro no build Could not find a declaration file for module 'string-mask'
import * as StringMask from 'string-mask';

export class InputMaskBase {
  @Input() maskedModel = false;
  cleanValue: string;

  onLostFocus(): void {

  }

  getViewMask(decimals: number, decimalDelimiter: string, thousandsDelimiter: string): StringMask {
    let mask = '#' + thousandsDelimiter + '##0';

    if (decimals > 0) {
      mask += decimalDelimiter;
      for (let i = 0; i < decimals; i++) {
        mask += '0';
      }
    }
    return new StringMask(mask, {
      reverse: true
    });
  }

  getModelMask(decimals: number): StringMask {
    let mask = '###0';

    if (decimals > 0) {
      mask += '.';
      for (let i = 0; i < decimals; i++) {
        mask += '0';
      }
    }
    return new StringMask(mask, {
      reverse: true
    });
  }

  clearDelimitersAndLeadingZeros(value: string): string {
    if (value === '0') {
      return '0';
    }
    const cleanValue = value.replace(/^-/, '').replace(/^0*/, '');
    return cleanValue.replace(/[^0-9]/g, '');
  }

  prepareNumberToFormatter(value: string, decimals: number) {
    return this.clearDelimitersAndLeadingZeros((parseFloat(value)).toFixed(decimals));
  }


}
