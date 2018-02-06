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
    return new Promise((resolve, reject) => {
    this.action.getListOfInputFiles().subscribe(data => {
      this.inputs = data;
      resolve(data);
    },
      err => {
        reject();
      });
    });
  }
  onStartExecutionClick() {
    this.action.startSequentialExecution().subscribe(data => {
      console.log('Hit in');
      console.log(data);
      this.displayListRefresh = false;
      localStorage.setItem('displayListRefresh', JSON.stringify(false));
    }, err => {
      console.log('Hit in');
      console.log(err);
      this.displayListRefresh = false;
      localStorage.setItem('displayListRefresh', JSON.stringify(false));
    });
  }
  fetchReportStatus() {
    this.inputs.forEach(file => {
      console.log('filename is ' + file);
      this.resultService.getReportStatus(file).subscribe(data => {
        this.reportStatus.push(data);
        console.log('data recieved is: ' + data);
      });
    });
  }

  onReload() {
    location.reload(true);
  }

  getListOfInputFiles() {
    this.action.fromInputCreateBatchAndMegathrows().subscribe(data => {
      this.onReload();
    });
  }
  onRestartClick(){
    this.displayListRefresh = true;
    localStorage.setItem('displayListRefresh', JSON.stringify(true));
    this.onReload();
  }

  ngOnInit() {
    if (localStorage.displayListRefresh) {
      this.displayListRefresh = JSON.parse(localStorage.displayListRefresh);
    }
    this.getInputsArray().then((data) => {
      this.fetchReportStatus();
    });
  }

}
