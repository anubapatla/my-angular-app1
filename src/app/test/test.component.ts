import { Component,DoCheck,Input,OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent  implements DoCheck{
  @Input() user:any;
  private previousUserName:string | undefined;
  ngDoCheck(): void {
    if(this.user.name !=this.previousUserName){
    this.previousUserName=this.user.name;
    
   console.log('ngDoCheck called-user name changed to:',this.user.name);
 }
}}
