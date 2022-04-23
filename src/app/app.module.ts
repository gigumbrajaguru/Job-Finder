import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { JobSearchComponent } from './job-search/job-search/job-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { JobDetailComponent } from './job-search/job-detail/job-detail.component';
import { NotificationsBoxesComponent } from './notifications-boxes/notifications-boxes.component';

@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    MenuBarComponent,
    ErrorHandlerComponent,
    JobDetailComponent,
    NotificationsBoxesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
