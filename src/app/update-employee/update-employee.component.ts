import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  updateForm: FormGroup;

  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));

    this.updateForm = new FormGroup({
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

  onSubmit(){
    console.log(this.employee); 
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}