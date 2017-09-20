import { Observable } from 'rxjs/Rx';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { AddMediaComponent } from '../dialogs/add-media/add-media.component';
import { VideoSettingsComponent } from '../dialogs/video-settings/video-settings.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string, icon: string): Observable<boolean> {
        let dialogRef: MdDialogRef<ConfirmDialogComponent>;
        dialogRef = this.dialog.open(ConfirmDialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.icon = icon;
        return dialogRef.afterClosed();
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
}
