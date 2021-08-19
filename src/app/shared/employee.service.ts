import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
export const API_URL='http://localhost:44364/api/Employees'
import {EmployeeInitializeForListResponse} from './employee-initialize-for-list-response'
import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  private employeeListSubject: BehaviorSubject<EmployeeInitializeForListResponse> = new BehaviorSubject<EmployeeInitializeForListResponse>(null);
  get EmployeeInitializeObservable(): Observable<EmployeeInitializeForListResponse> {
    return this.employeeListSubject.asObservable();
  }
  create(param : Employee):Observable<Employee>{
    return this.http.post<Employee>(`${API_URL}`,param);
     
   }
   initialize(): void{
     this.http.get<EmployeeInitializeForListResponse>(`${API_URL}`,{}).subscribe(
       employees =>{
         if(employees)
         {
           this.employeeListSubject.next(employees);
         }
       }
     )
   };
}
