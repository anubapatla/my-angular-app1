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
  imports: [RouterOutlet, TestComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
employees() {
throw new Error('Method not implemented.');
}
  employeeRole:string='';
  employeeList = signal<empInterface[]>([
    { id:1,name:'EmployeeA',role:'Developer'},
    { id:2,name:'EmployeeB',role:'Marketing'},
    { id:3,name:'EmployeeC',role:'Manager'},
    { id:4,name:'EmployeeD',role:'Hr'},
    { id:5,name:'EmployeeE',role:'Analyst'},
    { id:6,name:'EmployeeF',role:'Admin'},

    
  ])
}
  
  

