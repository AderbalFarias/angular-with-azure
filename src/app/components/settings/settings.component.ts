import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../models/settings';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})

export class SettingsComponent implements OnInit {
    settings: Settings;

    constructor(
        private router: Router,
        private settingsService: SettingsService
    ) { }

    ngOnInit() {
        this.settings = this.settingsService.getSettings();
    }

    onSubmit() {
        this.settingsService.changeSettings(this.settings);
        alert('Settings saved');
    }
}
