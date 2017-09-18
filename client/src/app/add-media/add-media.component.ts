import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<AddMediaComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
