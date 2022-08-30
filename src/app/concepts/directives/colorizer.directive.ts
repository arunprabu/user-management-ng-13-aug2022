import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  // find the element in which appColorizer directive is used.
  // change the style of that element 
  divEl;

  constructor( private elRef: ElementRef, private renderer: Renderer2) { // Dependency Injection
    console.log('Inside constructor');
    console.log(this.elRef.nativeElement);

    this.divEl = this.elRef.nativeElement;
    
    // Let's change the bg color of the element thru js - NOT RECOMMENDED
    // this.divEl.style.backgroundColor = 'yellow';
    // this.divEl.style.color = 'black';
    // this.divEl.style.height = '300px';

    // Let's change the bg color of the element thru angular - RECOMMENDED
    this.renderer.setStyle(this.divEl, 'background-color', 'yellow');
    this.renderer.setStyle(this.divEl, 'color', 'black');
    this.renderer.setStyle(this.divEl, 'height', '300px');

    const paraEl = this.renderer.createElement('p'); // <p></p>
    const paraTxt = this.renderer.createText('Powered By Colorizer Directive'); //Powered By Colorizer Directive
    this.renderer.appendChild(paraEl, paraTxt); // <p>Powered By Colorizer Directive</p>
    this.renderer.appendChild(this.divEl, paraEl);
  }

  @HostListener('click', ['$event'])
  handleClick(event: any){
    console.log(event);
    this.renderer.setStyle(event.target, 'background-color', 'red');
  }

  // TODO: Handle mouseover with blue color, and mouseleave with yellow 

}
