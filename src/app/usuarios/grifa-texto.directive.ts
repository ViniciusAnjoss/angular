import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[grifaTexto]'
})


export class GrifaTextoDirective {

  @HostListener("mouseover") 
  onMouseOver(){
    console.log("mouse over");
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener("mouseout")
  onMouseOut(){
    console.log("mouse out");
    this.el.nativeElement.style.backgroundColor = 'white';
  }

  constructor(private el : ElementRef) {
  }
}


