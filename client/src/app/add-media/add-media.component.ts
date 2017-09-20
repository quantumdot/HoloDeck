import { MediaInventoryService, AddMediaProgress } from '../services/media-inventory.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MdProgressBar } from '@angular/material';
import { Subscription } from 'rxjs';






@Component({
  selector: 'app-add-media',
  providers: [MediaInventoryService],
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {

  media_url: string;
  progressSub: Subscription;
  progress: AddMediaProgress;
  
  constructor(public dialogRef: MdDialogRef<AddMediaComponent>, private mediaItemService: MediaInventoryService) { }

  ngOnInit() {
    console.log(this)
    this.media_url = "";
  }

  private check_complete(): void {
    if (this.progress.complete) {
      this.progressSub.unsubscribe();
      this.dialogRef.close();
    }
  }
  add_media(): void {
  	//'d3Eelj9Pkvw'
  	console.log(this.media_url);
  	console.log(this);
  	this.progressSub = this.mediaItemService.requestAdd(this.media_url).subscribe((data) => {
      this.progress = data;
      this.check_complete();
      console.log(data); // see console you get output every 5 sec
    });
  }
  cancel(): void {
  	this.dialogRef.close();
  }
}
