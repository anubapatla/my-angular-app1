import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, HostBinding, HostListener, Input, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from "./highlight-element.directive";
import { AppendTextPipe } from './append-text.pipe';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

    observable = new Observable((observer) => {
      observer.next('Hello');
    
    }).subscribe({
      next(value){
        console.log('Received value:', value);
      },
    });
    //console.log("observable executed");
  
  
title(title: any) {
    throw new Error('Method not implemented.');
  }

}

  