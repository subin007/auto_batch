import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';
@Component({
  selector: 'ui-tester',
  templateUrl: './ui-tester.component.html',
  styleUrls: ['./ui-tester.component.css']
})
export class UiTesterComponent implements OnInit {
  inputs;
  constructor(private action: ActionService) { }
  getInputsArray() {
    this.action.getListOfInputFiles().subscribe(data => { this.inputs = data; },
      err => {
        return err;
      });
  }
  ngOnInit() {
    this.getInputsArray();
  }

}
