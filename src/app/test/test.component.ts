import { Component, Input } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  {
   @Input() showData:{id:number;name:string}[]=[];
 
}