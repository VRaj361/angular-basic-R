import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {

  constructor() { }
  price=12000
  currentDate = new Date()
  user = "rAm"
  num = 123456.12345
  ngOnInit(): void {
  }

}
