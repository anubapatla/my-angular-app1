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
 products:{name: string; imageUrl:string}[]=[{
 name:'mastering bun-the modern full stack developer',
 imageUrl:'assets/bun.jpg',
 },{
 name:'mastering nestjs',
 imageUrl:'assets/NestJs.jpg',
 },
 {
 name:'mastering bangular developer',
 imageUrl:'assets/angular.jpg',
 },
 {
 name:'javascriptdeveloper',
 imageUrl:'src\assets/js_Course.jpg',
 },
 {
 name:'mastering css with sass&bootstrap',
 imageUrl:'assets/Html-Css.jpg',
 },
];
  
 title(title: any) {
    throw new Error('Method not implemented.');
  }
}

  