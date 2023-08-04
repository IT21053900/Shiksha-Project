import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addStudent:any;


constructor(private fb:FormBuilder,
routes:Router,
private  studentservice:StudentsService

   ){
    this.addStudent = fb.group(
      {
        name:['',Validators.required],
        email:['',Validators.required],
        dob:['',Validators.required],
        telephone:['',Validators.required],
        grade:['',Validators.required],
        gender:['',Validators.required],
        password:['',Validators.required],
      }
    )


   }

ngOnInit(): void {
  
}


  onSubmit(){
    console.log(this.addStudent.value);
    this.studentservice.addStudent(this.addStudent.value).subscribe((data:any) =>{

      console.log(data);
    })

  }
  

}
