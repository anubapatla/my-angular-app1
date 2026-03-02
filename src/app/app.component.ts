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
    <div *ngFor="let item of items; trackBy:trackByItemsId">
      <p>{{item.id}}: {{item.name}}</p>
    </div>
    <button (click)="updateItems()">
  `,
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  items= [
    {id:1, name:'Apple'},
    {id:2, name:'Banana'},
    {id:3, name:'Cherry'},
  ];
  trackByItemsId(items:any){
    return items.id;  }
    updateItems(){
      this.items[1] ={id:2,name:'Mango'}
    }
}
  
  

