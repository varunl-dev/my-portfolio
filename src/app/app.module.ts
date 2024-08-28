import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AboutMeComponent,
  ProfileComponent,
  ProjectsComponent,
  ResumeComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AboutMeComponent,
    ResumeComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
