import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [CommonModule,RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees = [
    { id: 1, empname: 'John Doe', empDept: 'Software Engineer' },
    { id: 2, empname: 'Jane Smith', empDept: 'Project Manager' },
    { id: 3, empname: 'Michael Johnson', empDept: 'UX Designer' },
    { id: 4, empname: 'Emily Davis', empDept: 'Data Analyst' },
    { id: 5, empname: 'David Wilson', empDept: 'DevOps Engineer' }
  ];

}
