import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  createForm: FormGroup;

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      gstNo: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{15}$")]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required]),
      country: new FormControl(""),
      latitude: new FormControl(""),
      panNo: new FormControl(""),
      address: new FormControl(""),
      state: new FormControl(""),
      mobileNo: new FormControl(""),
      longitude: new FormControl(""),
      code: new FormControl(""),
      pinCode: new FormControl(""),
      city: new FormControl(""),
      currency: new FormControl(""),
      cpdName: new FormControl(""),
      cpdDepartment: new FormControl(""),
      cpdMobileNo: new FormControl(""),
      cpdDesignation: new FormControl(""),
      cpdEmail: new FormControl(""),
    });  
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}