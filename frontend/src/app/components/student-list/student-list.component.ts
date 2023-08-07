import { Component,OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any;

  constructor(private studentservice:StudentsService
    ,private routes:Router
    ){}

  ngOnInit(): void {
    this.loaadStudent();
    
  }


loaadStudent(){
  this.studentservice.StudentList().subscribe((data:any)=>{
    //console.log(data);
    this.students = data;
  })
}

delStudent(datas:any){
  this.studentservice.deleteStudent(datas._id).subscribe(data =>{
    console.log(data);
    this.students = this.students.filter((u:any)=>u!==datas)
  })


}


}
