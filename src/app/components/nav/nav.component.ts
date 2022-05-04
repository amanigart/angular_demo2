import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu!: NbMenuItem[];
  isConnected! : boolean

  constructor(private _service: FakeauthService) { }

  ngOnInit(): void {
    this.menu = [
      {link: '/demo1', title: 'Demo 1', icon: 'hash'},
      {link: '/demo2', title: 'Demo 2', icon: 'hash'},
    ]
    this.isConnected = this._service.isConnected;
  }

}
