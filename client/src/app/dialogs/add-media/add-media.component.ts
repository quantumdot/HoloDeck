import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MdProgressBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { MediaInventoryService, AddMediaProgress } from '../../services/media-inventory.service';





@Component({
  selector: 'app-add-media',
  providers: [],
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent implements OnInit {

  media_url: string;
  is_submitted: boolean;
  progressSub: Subscription;
  progress: AddMediaProgress;

  constructor(public dialogRef: MdDialogRef<AddMediaComponent>, private mediaItemService: MediaInventoryService) { }

  ngOnInit() {
    console.log(this);
    this.is_submitted = false;
    this.media_url = '';
    this.progress = {
      complete: false,
      task: 'Downloading...',
      help: 'Some help message........',
      total: 10,
      recieved: 5,
      ratio: 0.5,
      rate: 1,
      eta: 500
    };
  }

  private check_complete(): void {
    if (this.progress.complete) {
      this.progressSub.unsubscribe();
      console.log('Notifying service to requery!');
      this.mediaItemService.suggestInventoryQuery.emit(null);
      this.dialogRef.close();
    }
  }
  add_media(): void {
    this.is_submitted = true;
  	// 'd3Eelj9Pkvw'
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
