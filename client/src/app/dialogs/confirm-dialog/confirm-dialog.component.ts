import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

    public icon: string;
    public title: string;
    public message: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialogComponent>) {

    }
}