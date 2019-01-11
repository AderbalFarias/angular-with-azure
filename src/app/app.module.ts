import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsService } from './services/settings.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [SettingsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
