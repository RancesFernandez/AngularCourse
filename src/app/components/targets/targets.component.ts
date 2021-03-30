import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
