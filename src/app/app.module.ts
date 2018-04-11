///<reference path="../../node_modules/@angular/material/button/typings/button-module.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule, MatDialogModule, MatDrawerContainer, MatIconModule, MatInputModule, MatMenuModule,
  MatSelectModule, MatSidenavModule
} from '@angular/material';
import { FormsModule} from '@angular/forms';
import {StudentService} from './services/student.service';
import {HttpClientModule} from '@angular/common/http';
import { AddStudentComponent } from './modules/add-student/add-student.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatDialogModule,
    HttpClientModule,
    MatAutocompleteModule

  ],
  entryComponents: [
    AddStudentComponent
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
