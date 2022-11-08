import { Component, OnInit } from '@angular/core';
import { layoutConfig } from '../layout.config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  layoutConfig = layoutConfig;

  constructor() { }

  ngOnInit(): void {
  }

}
