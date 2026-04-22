import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, HostBinding, HostListener, Input, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from "./highlight-element.directive";
import { AppendTextPipe } from './append-text.pipe';
import { EmployeeService } from './dependencies/employee.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, AppendTextPipe, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employees: any[];
  empId:number=0;
  emp:any;

  constructor(private e:EmployeeService){
    this.employees = this.e.getEmployees();
  }
  showDetails(employeeId:number){
    this.empId=employeeId;
    this.emp=this.e.getEmployeeById(employeeId);
  }
title(title: any) {
    throw new Error('Method not implemented.');
  }
}


  