import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe,CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  {
emitEvent() {
throw new Error('Method not implemented.');
}
    @Output() myEvent = new EventEmitter<string>();

  sendEvent() {
    this.myEvent.emit('Your message here');
  }
}