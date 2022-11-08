import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Sidenav, sideNavItems } from '../../layout.config';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() menuClose = new EventEmitter<void>();
  sideNavItems: Sidenav[] = sideNavItems;

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.menuClose.emit();
  }
}
