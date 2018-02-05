import { Component, OnInit , Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultService } from '../../services/result.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css'],
  providers: [ResultService]
})
export class ReportDetailsComponent implements OnInit {
  metadata; initials; specSprint;
  @Input() passCount: number;
  @Input() failCount: number;
  constructor(private http: HttpClient, private resultService: ResultService) { }
  initialConditionsVerification() {
    if (this.initials.deviceOnline === null) {
      if (this.initials.saidClaimed === null) {
        if (this.initials.loginTwo === null) {
          if (this.initials.loginOne === null) {
            return 'Waiting for First Login';
          }
          return 'Done Login One';
        }
        return 'Done Login Two';
      }
      return 'Checked SAID Claimed Status';
    }
    return 'Checked Device Online Status';
  }
  ngOnInit() {
    this.resultService.getMegaThrowReport().subscribe(data => {
      this.metadata = data.metadata;
      this.initials = data.initials;
      this.specSprint = data.specSprint;
    }
    );
  }
}
