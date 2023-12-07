import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageDetails]'
})
export class ImageDetailsDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  ImageChange() {
    var src: any = this.el.nativeElement.src;
    var prev: any = document.querySelector('.ecommerce-gallery-main-img');
    prev.src = src;
  }

}
