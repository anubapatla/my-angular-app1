import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective {
 @HostBinding('style.backgroundColor') bgcolor = 'yellow';
 @HostBinding('style.padding') padding = '10px';
 @HostBinding('style.border') border = '2px solid black';
 @HostBinding('style.color') color = 'red';
 constructor() { }

}
