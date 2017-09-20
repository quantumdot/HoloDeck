import { MediaInventoryService, AddMediaProgress } from '../services/media-inventory.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';






@Component({
  selector: 'app-add-media',
  providers: [MediaInventoryService],
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {

  progressSub: Subscription;
  progress: AddMediaProgress;
  
  constructor(public dialogRef: MdDialogRef<AddMediaComponent>,
    @Inject(MD_DIALOG_DATA) public data: any, private mediaItemService: MediaInventoryService) { }

  ngOnInit() {
    this.progressSub = this.mediaItemService.requestAdd('d3Eelj9Pkvw').subscribe((data) => {
      this.progress = data;
      this.check_complete();
      console.log(data); // see console you get output every 5 sec
    });
  }

  private check_complete(): void {
    if (this.progress.complete) {
      this.progressSub.unsubscribe();
    }
  }
  onNoClick(): void {
    this.mediaItemService.requestAdd('d3Eelj9Pkvw');
    this.dialogRef.close();
  }
}
