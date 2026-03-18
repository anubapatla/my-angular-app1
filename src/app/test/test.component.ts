import { Component,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements OnChanges{
  @Input() inputValue:string='';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('calling from the ngonchanges hooks---');
    console.log(changes);
  }

}
