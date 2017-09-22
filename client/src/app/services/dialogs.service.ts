import { Observable } from 'rxjs/Rx';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { AddMediaComponent } from '../dialogs/add-media/add-media.component';
import { ManageWifiComponent } from '../dialogs/manage-wifi/manage-wifi.component';
import { VideoSettingsComponent } from '../dialogs/video-settings/video-settings.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { ProgressDialogComponent } from '../dialogs/progress-dialog/progress-dialog.component';



@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string, icon: string, confirm_button = 'OK', cancel_button = 'Cancel'): Observable<boolean> {
        let dialogRef: MdDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.icon = icon;
        dialogRef.componentInstance.confirm_button = confirm_button;
        dialogRef.componentInstance.cancel_button = cancel_button;
        return dialogRef.afterClosed();
    }
    public progress(title: string, message: string, icon: string): MdDialogRef<ProgressDialogComponent> {
        let dialogRef: MdDialogRef<ProgressDialogComponent>;
        dialogRef = this.dialog.open(ProgressDialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.icon = icon;
        return dialogRef;
    }
    showAddMediaDialog(): Observable<any> {
      console.log('opening add dialog!');
      let dialogRef: MdDialogRef<AddMediaComponent>;
      dialogRef = this.dialog.open(AddMediaComponent, {
        // height: '400px',
        // width: '600px',
      });
      return dialogRef.afterClosed();
    }

    showVideoSettingsDialog(): Observable<any> {
      console.log('opening video settings!');
      let dialogRef: MdDialogRef<VideoSettingsComponent>;
      dialogRef = this.dialog.open(VideoSettingsComponent, {
        // height: '400px',
        width: '300px',
      });
      return dialogRef.afterClosed();
    }
    showWifiSettingsDialog(): Observable<any> {
      console.log('opening video settings!');
      let dialogRef: MdDialogRef<ManageWifiComponent>;
      dialogRef = this.dialog.open(ManageWifiComponent, {
        // height: '400px',
        width: '300px',
      });
      return dialogRef.afterClosed();
    }
}
