import { AfterContentInit, Component, DoCheck, Input, OnInit, signal } from '@angular/core';
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
export class AppComponent  implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  itemArr : string[]=['Item1','Item2','Item3'];
  addItem(){
    const newItem = `Item ${this.itemArr.length+1}`;
    this.itemArr.push(newItem);  }
    deleteItem(index: number){
      if(index>=0 && index <this.itemArr.length){
        this.itemArr.splice(index,1);
      }
    }
    ngOnInit():void{
      console.log('app component intiakised');
    }
}
  