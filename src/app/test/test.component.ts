import { Component, Input, Output, EventEmitter, output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit,OnDestroy {
  @Input() items: string[]=[]; 
  @Output() itemDeleted= new EventEmitter<number>();
  deleteIndex(index:number){
    this.itemDeleted.emit(index);
  }
  ngOnInit(): void {
    console.log('TestComponent initilized');
  }
  ngOnDestroy(): void {
    console.log('TestComponent destroyed');
  }
}