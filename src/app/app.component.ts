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
  template: `
  <h1>user information </h1>
  <div class="user-info">
  <div class="info-block">
  <h4>without Json </h4>
  <p>{{ userDetails }}</p>
  </div>
  <div class="info-block">
  <h4>with json</h4>
  <pre>{{ userDetails | json | uppercase}}</pre>
  </div>
  </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
userDetails = {
  name:'User',
  email:'user@example.com',
  address:{
    street:'123 Main St',
    city:'Anytown',
    state:'CA',
    zip:'12345'
  },
};
title(title: any) {
    throw new Error('Method not implemented.');
  }
}


  