import { Component, Input, Output, EventEmitter, output, OnInit, OnDestroy, ContentChild, ElementRef, AfterContentInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements AfterContentInit {
 @ContentChild('showPara')paraRef?: ElementRef;
  ngAfterContentInit(): void {
  const content = this.paraRef?.nativeElement;
  content.style.fontStyle='italic';
  content.style.color='blue';
}

}