import {Directive, Input, HostListener, ElementRef, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appCustomNgModel]'
})

export class CustomNgModelDirective {

  @Input()
  e: string = '';
  @Output() data = new EventEmitter<string>();


  constructor(private el: ElementRef) {
    this.e = (el.nativeElement as HTMLInputElement).value;
  }

  @HostListener('change')
  onchange() {
    this.e = (this.el.nativeElement as HTMLInputElement).value;
    this.data.emit(this.e);
  }

}
