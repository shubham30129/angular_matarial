import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {StudentService} from './services/student.service';
import {AddStudentComponent} from './modules/add-student/add-student.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  studentData: any;
  constructor(public dialog: MatDialog , public studentService: StudentService ) {}
  ngOnInit () {
    this.studentService.display().subscribe(
      (res) => {
        this.studentData = res;
      }
    );
    console.log(this.studentData);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
