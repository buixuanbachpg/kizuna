import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {EmployeeService} from 'src/app/shared/employee.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder,private service: EmployeeService) { }

  ngOnInit(): void {
  }
employeeForm=this.fb.group({
  employeeID: 0,
      fullName: ['',Validators.required],
      position: [''],
      empCode: [''],
      mobile: ['']
})
onSubmit()
{
  this.service.create(this.employeeForm.value).subscribe(data =>{
    if(data)
    {
      this.formReset();
    }
  })
}
formReset()
{
  this.employeeForm.reset({
    employeeID: 0,
      fullName: [''],
      position: [''],
      empCode: [''],
      mobile: ['']
  })
}
}
