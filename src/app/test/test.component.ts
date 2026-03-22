import { Component,DoCheck,Input,OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements DoCheck{
  ngDoCheck(): void {
    console.log('ngDoCheck() hook was invoked')
  }
}
