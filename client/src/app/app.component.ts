import { Component, Injectable, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { AddMediaComponent } from './dialogs/add-media/add-media.component';
import { VideoSettingsComponent } from './dialogs/video-settings/video-settings.component';
import { DialogsService } from './services/dialogs.service';
import { SystemControlService } from './services/system-control.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HoloDeck';
  themeClass: string;

  constructor(public dialog: DialogsService, private sysCtrlService: SystemControlService) {}

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
  updateApplication(): void {
  	let title = 'Update System?';
  	let message = 'Are you sure that you want to update the system?';
  	let icon = '';
  	let confirm_button = 'Update';
  	let cancel_button = 'Cancel';
  	this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe((data) => {
  		if (data) {
  			let prog = this.dialog.progress('Updating System....', '', '');
  			this.sysCtrlService.requestSystemUpdate().subscribe((data) => {
  				if (data) {
  					prog.close();
  					window.location.replace('/'); // reload the app
  				}
  			});
  		}
  	});
  }
  restartServices(): void {
  
  }
  restartSystem(): void {
  
  }
  shutdownSystem(): void {
  
  }
  
}




