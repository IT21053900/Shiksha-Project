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
}
