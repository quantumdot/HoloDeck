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
  networks: WifiDataSource | null;

  state: string;
  selectedSource: WifiCell;
  passphrase: string;

  constructor(public dialogRef: MdDialogRef<ManageWifiComponent>, private wifiService: WifiManagementService) {
    this.networks = new WifiDataSource(wifiService);
    this.state = 'list';
    this.passphrase = '';
  }

  ngOnInit() {}

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
    let obsv = this.wifiService.connect(this.selectedSource.ssid, this.passphrase);
    obsv.subscribe((data) => {
      console.log(data);
      this.dialogRef.close();
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
