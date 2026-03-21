import { Component,Input,OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements OnChanges{
  @Input() user:any;
 ngOnChanges(changes: SimpleChanges): void {
   console.log('ngOnChanges called:',changes);
 }
}
