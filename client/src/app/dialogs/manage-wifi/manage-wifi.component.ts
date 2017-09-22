import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdDialogRef, MdProgressBar } from '@angular/material';
import { Subscription, Observable } from 'rxjs';
import { WifiManagementService, WifiCell } from '../../services/wifi-management.service';





@Component({
  selector: 'manage-wifi',
  providers: [],
  templateUrl: './manage-wifi.component.html',
  styleUrls: ['./manage-wifi.component.scss']
})
export class ManageWifiComponent implements OnInit {
  displayedColumns = ['ssid', 'saved'];
  // networks: WifiDataSource | null;
  networks: WifiCell[];

  state: string;
  selectedSource: WifiCell;
  passphrase: string;
  error_data: string;

  constructor(public dialogRef: MdDialogRef<ManageWifiComponent>, private wifiService: WifiManagementService) {
    //this.networks = new WifiDataSource(wifiService);
    this.state = 'list';
    this.passphrase = '';
  }

  ngOnInit() {
    this.wifiService.listConnections().toPromise().then(networks => this.networks = networks);
  }

  start_connect(event, wsource): void {
    this.selectedSource = wsource;
    if (this.selectedSource.saved || !this.selectedSource.encrypted) {
      this.connect();
    } else {
      this.state = 'config';
    }
    console.log(event, wsource);
  }
  connect(): void {
    this.state = 'connecting';
    let obsv: Observable<any>;
    obsv = this.wifiService.connect(this.selectedSource.ssid, this.passphrase);
    obsv.subscribe((data) => {
      console.log(data);
      if (data.success) {
        this.dialogRef.close();
        this.state = 'success';
        setTimeout(() => { this.dialogRef.close(); }, 5000);
      } else {
        this.error_data = data.message;
        this.state = 'error';
      }
    });
  }
  cancel(): void {
    this.dialogRef.close();
  }
}


export class WifiDataSource extends DataSource<any> {
  constructor(private wifiService: WifiManagementService) {
    super();
  }

  connect(): Observable<WifiCell[]> {
    return this.wifiService.listConnections();
  }

  disconnect() {}
}
