import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent  implements OnInit{


  addStudent:any;
  id: any;


  constructor(private fb:FormBuilder,
 private routes:Router,
  private  studentservice:StudentsService,
  private url:ActivatedRoute

  
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
    this.id = this.url.snapshot.params['id'];
    console.log();
    this.studentservice.singleStudent(this.id).subscribe(data=>{
      this.addStudent.patchValue(data);
    })
    
    
  }
  
  
    onSubmit(){
      console.log(this.addStudent.value);
      this.studentservice.updateStudent(this.id,this.addStudent.value).subscribe((data:any) =>{
  
        console.log(data);
        this.routes.navigate(['/student-list']);
      })
  
    }
    
  
  }
  
