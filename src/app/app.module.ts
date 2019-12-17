import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './/app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LayoutModule } from './/layouts/layout.module';
import { ScriptLoaderService } from './_services/script-loader.service';
import { CompteComponent } from './pages/compte/compte.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompteService } from './shared_service/compte/compte.service';
import { MailService } from './shared_service/mail/mail.service';
import { MailComposeComponent } from './pages/mailbox/mail-compose/mail-compose.component';
import { FormsModule }   from '@angular/forms';
import { MailViewComponent } from './pages/mailbox/mail-view/mail-view.component';
import { MailboxComponent } from './pages/mailbox/mailbox/mailbox.component';
import { MailDetailComponent } from './pages/mailbox/mail-detail/mail-detail.component';
import { CarnetComponent } from './pages/carnet/carnet.component';
import { CarnetService } from './shared_service/carnet/carnet.service';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AuthGuardService } from './shared_service/guards/auth-guard.service';
import { AuthentificationService } from './shared_service/authentification/authentification.service';
import { IdgroupePipe } from './pipe/FilterIdGroupe/idgroupe.pipe';
import { FilterMailPipe } from './pipe/FilterMail/filter-mail.pipe';
import { FilterPipe } from './Filter/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CompteComponent,
    MailboxComponent,
    MailViewComponent,
    MailComposeComponent,
    MailDetailComponent,
    CarnetComponent,
    LoginComponent,
    RegisterComponent,
    IdgroupePipe,
    MailDetailComponent,
    FilterPipe,
    FilterMailPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule

  ],
  providers: [
      ScriptLoaderService,
      CompteService,
      CarnetService,
      MailService,
      AuthentificationService,
      AuthGuardService

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
