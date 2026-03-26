import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  {
   @Input() receiveMessage:string='';
 
}