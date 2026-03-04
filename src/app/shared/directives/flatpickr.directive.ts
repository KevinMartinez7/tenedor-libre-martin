import { Directive, ElementRef, forwardRef, inject, input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import type { Instance } from 'flatpickr/dist/types/instance';

@Directive({
  selector: '[appFlatpickr]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FlatpickrDirective),
      multi: true,
    },
  ],
})
export class FlatpickrDirective implements OnInit, OnDestroy, ControlValueAccessor {
  minDate = input<string>('today');

  private el = inject(ElementRef);
  private fp!: Instance;
  private onChange = (_: string) => {};
  private onTouched = () => {};

  ngOnInit() {
    this.fp = flatpickr(this.el.nativeElement, {
      locale: Spanish,
      dateFormat: 'Y-m-d',
      altInput: true,
      altFormat: 'D, d M Y',
      minDate: this.minDate(),
      disableMobile: false,
      onChange: (_, dateStr) => {
        this.onChange(dateStr);
        this.onTouched();
      },
      onClose: () => this.onTouched(),
    }) as Instance;
  }

  ngOnDestroy() {
    this.fp?.destroy();
  }

  writeValue(value: string) {
    if (this.fp) {
      this.fp.setDate(value ?? '', false);
    }
  }

  registerOnChange(fn: (_: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled;
  }
}
