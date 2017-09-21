import { Component, Injectable, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AddMediaComponent } from './dialogs/add-media/add-media.component';
import { VideoSettingsComponent } from './dialogs/video-settings/video-settings.component';
import { DialogsService } from './services/dialogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HoloDeck';
  themeClass: string;

  constructor(public dialog: DialogsService) {}

  ngOnInit(): void {
    // subscribe to some source of theme change events, then...
    // this.themeClass = newThemeClass;
    // this.overlayContainer.themeClass = newThemeClass;
  }

  showAddMediaDialog(): void {
    this.dialog.showAddMediaDialog();
  }

  showVideoSettingsDialog(): void {
    this.dialog.showVideoSettingsDialog();
  }
  showWifiSettingsDialog(): void {
    this.dialog.showWifiSettingsDialog();
  }
}




