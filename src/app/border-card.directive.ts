import { Directive, ElementRef, HostListener, Input } from '@angular/core';
  
@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009688';
    private defaultHeight: number = 200;

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @Input('pkmnBorderCard')
    borderColor!: string; // declaration avec alias
    @Input() pkmnBorderCard!: string; // sans alias

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor); // utilisation du ou pour definir une valeur par defaut
        this.setHeight(220);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }
  
    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
  
    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}