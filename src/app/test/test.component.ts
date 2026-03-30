import { Component, Input, Output, EventEmitter, output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  {
count:number = 0;
incrCounter(){
  this.count++;
}
}