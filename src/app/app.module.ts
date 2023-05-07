import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminManageAccountComponent } from './admin-manage-account/admin-manage-account.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProgramComponent } from './program/program.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalEventComponent } from './faculty-dashboard/modal-event/modal-event.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FacultyPartnersComponent } from './faculty-partners/faculty-partners.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminManageAccountComponent,
    FacultyDashboardComponent,
    PartnershipComponent,
    SignInComponent,
    SignUpComponent,
    ProgramComponent,
    ModalEventComponent,
    FacultyPartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
