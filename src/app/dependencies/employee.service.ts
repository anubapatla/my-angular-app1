
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees=[
    {id:1,
    name:'Employee 1',
    department:'Admin Dept',
    location:'usa',
    phone:'32524552',},
    {
       id:2,
    name:'Employee 2',
    department:'HR Dept',
    location:'canada',
    phone:'32524553',},
     {id:3,
    name:'Employee 3',
    department:'Finance Dept',
    location:'uk',
    phone:'32524554',},
    {
       id:4,
    name:'Employee 4',
    department:'IT Dept',
    location:' australia',
    phone:'32524555',
    },
  ];
    getEmployees(){
      return this.employees;
    }
 getEmployeeById(id:number){
  return this.employees.find(emp=>emp.id===id);
 }
    
  

  
}
