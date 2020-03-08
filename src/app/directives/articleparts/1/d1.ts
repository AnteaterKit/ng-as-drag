import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAsFileDrop]'
})
export class AsFileDropDirective {
  private element: HTMLElement;
  constructor(private elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any): any {
    const files = event.dataTransfer.files;
  }

}
