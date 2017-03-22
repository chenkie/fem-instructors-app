import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InstructorListComponent } from './instructor-list/instructor-list.component';
import { InstructorDetailComponent } from './instructor-detail/instructor-detail.component';
import { ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AddInstructorComponent } from './add-instructor/add-instructor.component';

import { InstructorService } from './instructor/instructor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InstructorListComponent,
    InstructorDetailComponent,
    HomeComponent,
    AddInstructorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [InstructorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
