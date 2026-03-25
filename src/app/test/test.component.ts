import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,ContentChild,DoCheck,ElementRef,Input,OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements OnInit,OnDestroy{
  ngOnInit(): void{
    console.log('test component:OnInit');
  }
  ngOnDestroy(): void {
    console.log('test component:ngondestroy');
  }
}