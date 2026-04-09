import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, HostBinding, HostListener, Input, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from "./highlight-element.directive";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HighlightElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showJson:boolean=false;
students =[
  {name:'userA',age:20,gender:'male',major:'css'},
   {name:'user',age:22,gender:'female',major:'angular'},
    {name:'userC',age:25,gender:'female',major:'javascript'},
     {name:'userD',age:24,gender:'male',major:'c#'},
];
toggleJson(){
 this.showJson=!this.showJson;
}
title(title: any) {
    throw new Error('Method not implemented.');
  }
}


  