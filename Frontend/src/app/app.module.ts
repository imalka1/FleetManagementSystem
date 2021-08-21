import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './main/content/content.component';
import {NavbarComponent} from './main/navbar/navbar.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ItemDeliveryComponent} from './main/content/transport-manager/item-delivery/item-delivery.component';
import {ViewItemDeliveryComponent} from './main/content/transport-manager/view-item-delivery/view-item-delivery.component';
import {NavTransportManagerComponent} from './main/navbar/nav-transport-manager/nav-transport-manager.component';
import {DriverRegistrationComponent} from './main/content/Driver/driver-registration/driver-registration.component';
import {OverTimeComponent} from './main/content/Driver/over-time/over-time.component';
import {ShiftDetailsComponent} from './main/content/Driver/shift-details/shift-details.component';
import {FuelUpdateComponent} from './main/content/Driver/fuel-update/fuel-update.component';
import {NewOverTimeComponent} from './main/content/Driver/over-time/new-over-time/new-over-time.component';
import {ViewOverTimeComponent} from './main/content/Driver/over-time/view-over-time/view-over-time.component';
import {DriverAccountComponent} from './main/content/Driver/driver-account/driver-account.component';

import {ViewPassengerDeliveryComponent} from './main/content/transport-manager/view-passenger-delivery/view-passenger-delivery.component';
import {PassengerDeliveryComponent} from './main/content/transport-manager/passenger-delivery/passenger-delivery.component';
import {UpdateItemDeliveryComponent} from './main/content/transport-manager/view-item-delivery/update-item-delivery/update-item-delivery.component';

import {NavGeneralManagerComponent} from './main/navbar/nav-general-manager/nav-general-manager.component';
import {CreateUserAccountComponent} from './main/content/general-manager/create-user-account/create-user-account.component';
import {UserAccountListComponent} from './main/content/general-manager/user-account-list/user-account-list.component';
import {AccountRequestsComponent} from './main/content/general-manager/account-requests/account-requests.component';
import {TransportRequestsComponent} from './main/content/general-manager/transport-requests/transport-requests.component';
import {NavApplicantComponent} from './main/navbar/nav-applicant/nav-applicant.component';
import {AvailableTransportsComponent} from './main/content/applicant/available-transports/available-transports.component';
import {CreateNewRequestComponent} from './main/content/applicant/create-new-request/create-new-request.component';
import {ApplicationStatusComponent} from './main/content/applicant/application-status/application-status.component';
import {NotificationsComponent} from './main/content/applicant/notifications/notifications.component';
import {FeedbackComponent} from './main/content/applicant/feedback/feedback.component';
import { UpdatePassengerDeliveryComponent } from './main/content/transport-manager/view-passenger-delivery/update-passenger-delivery/update-passenger-delivery.component';
import {NavDriverComponent} from "./main/navbar/nav-driver/nav-driver.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    ItemDeliveryComponent,
    ViewItemDeliveryComponent,
    NavTransportManagerComponent,
    NavDriverComponent,
    DriverRegistrationComponent,
    OverTimeComponent,
    ShiftDetailsComponent,
    FuelUpdateComponent,
    NewOverTimeComponent,
    ViewOverTimeComponent,
    DriverAccountComponent,
    ViewPassengerDeliveryComponent,
    PassengerDeliveryComponent,
    UpdateItemDeliveryComponent,
    NavGeneralManagerComponent,
    CreateUserAccountComponent,
    UserAccountListComponent,
    AccountRequestsComponent,
    TransportRequestsComponent,
    NavApplicantComponent,
    AvailableTransportsComponent,
    CreateNewRequestComponent,
    ApplicationStatusComponent,
    NotificationsComponent,
    FeedbackComponent,
    UpdatePassengerDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
