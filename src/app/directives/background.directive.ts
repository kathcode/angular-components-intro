import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'green';
  }
}
