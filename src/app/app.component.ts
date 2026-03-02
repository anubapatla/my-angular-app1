import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface empInterface {
  id: number;
  name: string;
  role: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, CommonModule],
  template: `
    <div *ngFor="let item of items; index as i">
      <p>{{i}} {{item}}</p>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: string[] = ['Angular', 'React', 'Node.js'];
}
  
  

