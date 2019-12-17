import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './/layouts/layout.component';




import { MailboxComponent } from './pages/mailbox/mailbox/mailbox.component';
import { MailComposeComponent } from './pages/mailbox/mail-compose/mail-compose.component';
import { MailViewComponent } from './pages/mailbox/mail-view/mail-view.component';

import { CalendarComponent } from './pages/calendar/calendar.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { Error500Component } from './pages/error-500/error-500.component';
import { CarnetComponent } from './pages/carnet/carnet.component';
import { CompteComponent } from './pages/compte/compte.component';
import { AuthGuardService as AuthGuard} from  './shared_service/guards/auth-guard.service';
import { MailDetailComponent } from './pages/mailbox/mail-detail/mail-detail.component';


const routes: Routes = [
    {path: '', redirectTo: 'mailbox', pathMatch: 'full'},
    {
        "path": "",
        "component": LayoutComponent,
        "canActivate": [AuthGuard],
        "children": [
           
            {
                path: "carnets",
                component: CarnetComponent
            },
            {
                path: "comptes",
                component: CompteComponent
            },
            
            {
                path: "mailbox",
                component: MailboxComponent
            },
            {
                path: "mail_view",
                component: MailViewComponent
            },
            {
                path: "mail_compose",
                component: MailComposeComponent
            },
            {
                path: "mail_detail/:id",
                component: MailDetailComponent
            },
            {
                path: "calendar",
                component: CalendarComponent
            },
            
            
        ]
    },
    {
        "path": "login",
        "component": LoginComponent
    },
    {
        "path": "register",
        "component": RegisterComponent
    },
  
    {
        "path": "forgot_password",
        "component": ForgotPasswordComponent
    },
    {
        "path": "error_404",
        "component": Error404Component
    },
    {
        "path": "error_500",
        "component": Error500Component
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];

@NgModule({
  declarations: [
   
    CalendarComponent,
   
    ForgotPasswordComponent,
    Error404Component,
    Error500Component,
  ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ 
    RouterModule,
  ]
})

export class AppRoutingModule { }
