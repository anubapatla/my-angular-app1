import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,ContentChild,DoCheck,ElementRef,Input,OnChanges, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements AfterContentInit , AfterContentChecked,AfterViewChecked{
  @ViewChild('wrapper')wrapper!:ElementRef;
  @ContentChild('contentWrapper')content!:ElementRef;
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() hook was invoked..');
     console.log('ngAfterContentInit()-wrapper:',this.wrapper);
      console.log('ngAfterContentInit() - content:' ,this.content);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() hook is')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterviewchecked() hook was invoked...')
  }
  //ngAfterViewInit(): void {
    //const divElement:HTMLElement=this.wrapper.nativeElement;
    //divElement.style.color='maroon';
    //divElement.style.fontSize='15px';
    //divElement.style.fontWeight='300';
    //console.log('ngAfterViewInit() was invoked..',this.wrapper)
  }

