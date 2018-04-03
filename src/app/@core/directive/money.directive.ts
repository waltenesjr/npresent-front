import {Directive, ElementRef, forwardRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
// TODO Verificar erro no build Could not find a declaration file for module 'string-mask'
import * as StringMask from 'string-mask';
import {InputMaskBase} from "./input-mask-base";


@Directive({
  selector: '[MoneyMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MoneyDirective),
      multi: true
    }
  ]
})
export class MoneyDirective extends InputMaskBase implements OnChanges, ControlValueAccessor {

  @Input() decimals = 2;

  private decimalDelimiter = ',';
  private thousandsDelimiter = '.';
  private currencySym = 'R$';
  private decimalsPattern = this.decimals > 0 ? this.decimalDelimiter + new Array(this.decimals + 1).join('0') : '';
  private maskPattern = this.currencySym + ' #' + this.thousandsDelimiter + '##0' + this.decimalsPattern;

  /** Pattern created by StringMask library*/
  private moneyMask = new StringMask(this.maskPattern, {reverse: true});

  /** Placeholders for the callbacks which are later providesd by the Control Value Accessor*/
  private onChangeCallback = (_: any) => {
  };
  private onTouchCallback = () => {
  };

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.decimals > 1) {
      this.decimalsPattern = this.decimals > 0 ? this.decimalDelimiter + new Array(this.decimals + 1).join('0') : '';
      this.maskPattern = this.currencySym + ' #' + this.thousandsDelimiter + '##0' + this.decimalsPattern;
      this.moneyMask = new StringMask(this.maskPattern, {reverse: true});
      this.cleanValue = this._cleanValue(this._elementRef.nativeElement.value);
      this._applyValueChanges(this.cleanValue);
    }
  }

  /** Listener for input target of our directive*/
  @HostListener('input')
  onKeydow(): void {
    const cleanValue: string = this._cleanValue(this._elementRef.nativeElement.value);
    this._applyValueChanges(cleanValue);
  }

  /** From ControlValueAccessor interface*/
  /**
   * Write a new value to the element.
   */
  public writeValue(modelValue: number): void {

    if (modelValue === null || modelValue === undefined) {
      this._elementRef.nativeElement.value = '';
      return;
    }

    this._elementRef.nativeElement.value = this._cleanInitialModelValue(parseFloat(modelValue.toString()));
  }

  /** From ControlValueAccessor interface*/
  /**
   * Set the function to be called
   * when the control receives a change event.
   */
  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
    return;
  }

  /** From ControlValueAccessor interface*/
  /**
   * Set the function to be called
   * when the control receives a touch event.
   */
  public registerOnTouched(fn: any): void {
    this.onTouchCallback = fn;
  }


  /** From ControlValueAccessor interface*/
  /**
   * Set the function to be called
   * when the control receives a disabled event.
   */
  setDisabledState(isDisabled: boolean) {
    this.renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

  /** It applies the mask in the input and updates the control's value. */
  private _applyValueChanges(cleanValue: any): void {

    if (cleanValue) {

      const formattedValue = this.moneyMask.apply(cleanValue);
      this._elementRef.nativeElement.value = formattedValue;
      this.onChangeCallback(formattedValue ? parseInt(formattedValue.replace(/[^\d]+/g, ''), 10) / Math.pow(10, this.decimals) : null);
    }
  }

  /** It clean the captured value in the input*/
  private _cleanValue(viewValue: string): string {
    let cleanValue = viewValue.toString().replace(/[^\d]+/g, '');
    cleanValue = cleanValue.replace(/^[0]+([1-9])/, '$1');
    return cleanValue;
  }

  /** It clean the assign value of models*/
  private _cleanInitialModelValue(modelValue: number): string {
    return this.moneyMask.apply(modelValue.toFixed(this.decimals).replace(/[^\d]+/g, ''));
  }
}
