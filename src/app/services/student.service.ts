import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
  res;
  studentList;
  headers: any;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({

    });
  }
  addStudentServices(data) {
    console.log(data);
    return this.http.post('http://localhost/student/insertstudent.php', data).subscribe(
      (res) => {
        this.display();
      }
    );
  }
  display() {
    return this.http.get('http://localhost/student/getallstudent.php').map(res => {
      return res;
    });
  }


}
