import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightElement]'
})
export class HighlightElementDirective implements OnInit{
 @HostBinding('style.backgroundColor') bgcolor = 'yellow';
 @HostBinding('style.padding') padding = '10px';
 @HostBinding('style.border') border = '2px solid black';
 @HostBinding('style.color') color = 'red';
 colorArray = ['red','blue','green','orange','purple'];
  private setRandomColor(){
  const colorPick = Math.floor(Math.random() * this.colorArray.length);
  //this.color = this.colorArray[randomIndex];
  if(this.bgcolor !== this.colorArray[colorPick]){
    this.bgcolor = this.colorArray[colorPick];
    
  }else{
    this.setRandomColor();
  }
}
  
 @HostListener('click') onToggle(){
  this.setRandomColor();}
 //constructor() { }
  ngOnInit(): void {
    this.bgcolor = 'lightblue';
    this.color = 'darkblue';
    this.padding='20px'
  }

}
