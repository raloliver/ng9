import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[green]'
})
export class GreenDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = "#BADA55"
   }

}
