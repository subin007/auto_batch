import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'unified-model',
  templateUrl: './unified-model.component.html',
  styleUrls: ['./unified-model.component.css']
})
export class UnifiedModelComponent implements OnInit {
  inputs; filename; showIcon; isPending; reportStatus = []; displayListRefresh = true;
  constructor(private action: ActionService, private resultService: ResultService) { }
  getInputsArray() {
    this.action.getListOfInputFiles().subscribe(data => { this.inputs = data; },
      err => {
        return err;
      });
  }
  onStartExecutionClick() {
    this.action.startSequentialExecution().subscribe(data => { this.displayListRefresh = false;
    },
      err => {
        return err;
      });
  }
  // fetchReportStatus() {
  //   this.inputs.array.forEach(file => {
  //     this.resultService.getReportStatus(file).subscribe(data => {
  //       // this.reportStatus.push(data);
  //       console.log('data recieved is: ' + data);
  //     });
  //   });
  // }

  onReload() {
    location.reload(true);
  }

  getListOfInputFiles(){
    this.action.fromInputCreateBatchAndMegathrows().subscribe(data => {
      this.onReload();
    });
  }

  ngOnInit() {
    this.getInputsArray();
    // this.fetchReportStatus();
  }

}
