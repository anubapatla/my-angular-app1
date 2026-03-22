import { AfterContentInit, Component,ContentChild,DoCheck,ElementRef,Input,OnChanges, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements AfterContentInit{
  @ViewChild('wrapper')wrapper!:ElementRef;
  @ContentChild('contentWrapper')content!:ElementRef;
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() hook was invoked..');
     console.log('ngAfterContentInit()-wrapper:',this.wrapper);
      console.log('ngAfterContentInit() - content:' ,this.content);
  }
}
