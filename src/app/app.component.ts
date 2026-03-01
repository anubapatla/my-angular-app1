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
  imports: [RouterOutlet, TestComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showEmployees: boolean =true;
  employees = signal<empInterface[]>([
    {id:1,name:'EmploeeA',role:'Admin'},
    {id:2,name:'EmploeeB',role:'Manager'},
    {id:3,name:'EmploeeC',role:'Developer'},
    {id:4,name:'EmploeeD',role:'Tester'},
    {id:5,name:'EmploeeE',role:'Designer'}
  ]);
  toggleEmployee(){
    this.showEmployees = !this.showEmployees;

  }
}
  
  

