import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AuthGuardService } from './auth.route.guard';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material';
import { AppComponent } from './app.component';
import { LazyloadingModule } from './lazy-loading/lazy-loading';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    LazyloadingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [ApiService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
