import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'progress-dialog',
    templateUrl: './progress-dialog.component.html',
    styleUrls: ['./progress-dialog.component.scss']
})
export class ProgressDialogComponent {

    public icon: string;
    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<ProgressDialogComponent>) {

    }
}