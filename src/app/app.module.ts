import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminManageAccountComponent } from './admin-manage-account/admin-manage-account.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProgramComponent } from './program/program.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FacultyPartnersComponent } from './faculty-partners/faculty-partners.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MoreInfoComponent } from './faculty/more-info/more-info.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminManageAccountComponent,
    PartnershipComponent,
    SignInComponent,
    SignUpComponent,
    ProgramComponent,
    FacultyPartnersComponent,
    FacultyComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
