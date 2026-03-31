import { AfterContentInit, Component, DoCheck, ElementRef, Input, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  @ViewChild(TestComponent)
  testComponent?: TestComponent;
  @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>;
  incrChildCounter(){
    console.log(this.testComponent);
      this.testComponent?.incrCounter();
    }
    ngAfterViewInit() : void {
      if(this.btnRef?.nativeElement){
        this.btnRef.nativeElement.innerHTML='counter++';
      }
    }
  }

  