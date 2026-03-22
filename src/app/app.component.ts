import { AfterContentInit, Component, DoCheck, OnInit, signal } from '@angular/core';
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
export class AppComponent implements DoCheck {
  title(title: any) {
    throw new Error('Method not implemented.');}
 dataFromParent:string='';
 //ngAfterContentInit():void{
  //console.log('ngAfterContentInit() hook was invoked');
 //}
 ngDoCheck(): void {
   console.log('ngDoCheck() hook was invoked');
 }
 sendDataToChild(): void{
  let random = Math.floor(Math.random()*10);
  this.dataFromParent='Random numbers'+random;
 }
  }
  