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
text:string ='example of content projection'; 
text1:string ='example of content projection'; 
text2:string ='example of content projection'; 
showDt:Date =new Date();

  title(title: any) {
    throw new Error('Method not implemented.');
  }
}

  