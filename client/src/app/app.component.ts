import { Component, Injectable, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/material';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { SystemControlService } from './services/system-control.service';
import { DialogsService } from './services/dialogs.service';
import { ProgressDialogComponent } from './dialogs/progress-dialog/progress-dialog.component';
import { AddMediaComponent } from './dialogs/add-media/add-media.component';
import { VideoSettingsComponent } from './dialogs/video-settings/video-settings.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HoloDeck';
  themeClass: string;
  prog: MdDialogRef<ProgressDialogComponent>;

  constructor(public dialog: DialogsService, private sysCtrlService: SystemControlService) {}

  ngOnInit(): void {
    // subscribe to some source of theme change events, then...
    // this.themeClass = newThemeClass;
    // this.overlayContainer.themeClass = newThemeClass;
  }

  reloadApp(): void {
    window.location.reload(true);; // reload the app
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
  /*private watchHeartBeatThenReload(rsp): void {
  	if (rsp) {
	  this.reloadApp();
	}
  }
  private watchHeartBeatError(err): void {
  	this.sysCtrlService.requestSystemUpdate().subscribe(res => this.watchHeartBeatThenReload(res), err => this.watchHeartBeatError(err))
  }*/
  updateApplication(): void {
    const title = 'Update System?';
    const message = 'Are you sure that you want to update the system?';
    const icon = '';
    const confirm_button = 'Update';
    const cancel_button = 'Cancel';
    this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe((data) => {
      if (data) {
        let prog: MdDialogRef<ProgressDialogComponent>;
        prog = this.dialog.progress('Updating System....', '', '');
        //this.sysCtrlService.requestSystemUpdate().subscribe(res => this.watchHeartBeatThenReload(res), err => this.watchHeartBeatError(err))
        this.sysCtrlService.requestSystemUpdate().subscribe(
          (rsp) => {
            if (rsp) {
              prog.close();
              this.reloadApp();
            }
          },
          (err) => {
            // do nothing
          }
        );
      }
    });
  }
  restartServices(): void {
    const title = 'Restart Services?';
    const message = 'Are you sure that you want to restart all services?';
    const icon = '';
    const confirm_button = 'Restart';
    const cancel_button = 'Cancel';
    this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe((data) => {
      if (data) {
        let prog: MdDialogRef<ProgressDialogComponent>;
        prog = this.dialog.progress('Restarting Services....', '', '');
        this.sysCtrlService.requestRestartServices().subscribe(
          (rsp) => {
            if (rsp) {
              prog.close();
              this.reloadApp();
            }
          },
          (err) => {
            // do nothing
          }
        );
      }
    });
  }
  restartSystem(): void {
    const title = 'Restart System?';
    const message = 'Are you sure that you want to restart the system?';
    const icon = '';
    const confirm_button = 'Restart';
    const cancel_button = 'Cancel';
    this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe((data) => {
      if (data) {
        let prog: MdDialogRef<ProgressDialogComponent>;
        prog = this.dialog.progress('Restarting System....', '', '');
        this.sysCtrlService.requestRestartSystem().subscribe(
          (rsp) => {
            if (rsp) {
              prog.close();
              this.reloadApp();
            }
          },
          (err) => {
            // do nothing
          }
        );
      }
    });
  }
  shutdownSystem(): void {
    const title = 'Shutdown System?';
    const message = 'Are you sure that you want to shutdown the system?';
    const icon = '';
    const confirm_button = 'Shutdown';
    const cancel_button = 'Cancel';
    this.dialog.confirm(title, message, icon, confirm_button, cancel_button).subscribe((data) => {
      if (data) {
        let prog: MdDialogRef<ProgressDialogComponent>;
        prog = this.dialog.progress('Shutting System Down....', '', '');
        this.sysCtrlService.requestShutdownSystem().subscribe(
          (rsp) => {
            if (rsp) {
              prog.close();
              this.reloadApp();
            }
          },
          (err) => {
            // do nothing
          }
        );
      }
    });
  }
}




