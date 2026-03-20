import { Component, OnInit, signal } from '@angular/core';
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
    throw new Error('Method not implemented.');}
    count:number =0;
    conterInterval:any;
    startCounter(){
      this.conterInterval=setInterval(()=>{
        if(this.count <= 5){
         console.log(this.count++);
        }else {
        clearInterval(this.conterInterval);
        }
      },1000);
    }
    ngOnInit(): void{
      this.startCounter();
    }
    constructor(){

    }
  }
  