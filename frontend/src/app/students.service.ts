import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http:HttpClient) { }


  addStudent(student:any){
    return this.http.post('http://localhost:8070/student/add',student);

  }

  StudentList(){
    return this.http.get('http://localhost:8070/student/view');
  }

  deleteStudent(id:any){
    return this.http.delete('http://localhost:8070/student/delete/'+id);
  }

  singleStudent(id:any){
    return this.http.get('http://localhost:8070/student/get/'+id);
  }

  updateStudent(id:any,student:any){
    return this.http.put('http://localhost:8070/student/update/'+id,student);
  }

}
