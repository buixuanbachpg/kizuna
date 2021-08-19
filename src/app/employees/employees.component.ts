import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { EmployeeInitializeForListResponse } from '../shared/employee-initialize-for-list-response';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private service:EmployeeService) { }
  employeeList: EmployeeInitializeForListResponse;
  ngOnInit(): void {
    this.service.initialize();
    this.service.EmployeeInitializeObservable.subscribe(data => {
      if(data)
      {
        this.employeeList=data;
      }
    })
  }

}
