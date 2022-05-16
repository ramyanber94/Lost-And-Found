import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  focus!: any;
  focus1!: any;
  active1?: any;
  constructor() { }

  ngOnInit() {
  }

}
