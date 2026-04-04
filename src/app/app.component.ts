import { AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, HostBinding, HostListener, Input, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from "./highlight-element.directive";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighlightElementDirective, CommonModule, FormsModule, HighlightElementDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.selectedColor=this.colorInput.nativeElement.value;
  }
  @ViewChild('colorInput') colorInput!: ElementRef;
  @HostBinding('style.backgroundColor')selectedColor!:string;
  @HostListener('input', ['$event']) onColorChange(event: Event){
    const target = event.target as HTMLInputElement;
    if (target) {
      this.selectedColor = target.value;
    }
  }
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}

  