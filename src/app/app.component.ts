import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, HostBinding, HostListener, Input, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from "./highlight-element.directive";
import { AppendTextPipe } from './append-text.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, AppendTextPipe, RouterLinkWithHref],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numbers: number[] = [5, 2, 9, 1,  6];
  sortOrder: 'asc' | 'desc' ='asc';
  showList:boolean=false;
 showSorting(){
  this.showList=true;
 }
title(title: any) {
    throw new Error('Method not implemented.');
  }
}


  