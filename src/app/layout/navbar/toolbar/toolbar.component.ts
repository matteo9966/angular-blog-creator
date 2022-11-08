import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { layoutConfig } from '../../layout.config';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();

  //  toolbarTitle = layoutConfig.toolbarTitle;
  //  toolbarColor = layoutConfig.toolbarColor;
  layoutConfig = layoutConfig;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuToggle.emit();
  }

}
