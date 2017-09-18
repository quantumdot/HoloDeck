import { Component, Injectable, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AddMediaComponent } from './add-media/add-media.component';
import { VideoSettingsComponent } from './video-settings/video-settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HoloDeck';
  themeClass: string;

  constructor(private overlayContainer: OverlayContainer, public dialog: MdDialog) {}

  ngOnInit(): void {
    // subscribe to some source of theme change events, then...
    // this.themeClass = newThemeClass;
    // this.overlayContainer.themeClass = newThemeClass;
  }

  showAddMediaDialog(): void {
    console.log('opening add dialog!');
    let dialogRef = this.dialog.open(AddMediaComponent, {
      // height: '400px',
      // width: '600px',
    });
  }

  showVideoSettingsDialog(): void {
    console.log('opening video settings!');
    let dialogRef = this.dialog.open(VideoSettingsComponent, {
      // height: '400px',
      width: '300px',
    });
  }
}




