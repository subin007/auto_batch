import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultService } from './services/result.service';
import { ReportComponent } from './components/report/report.component';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MasterComponent } from './components/master/master.component';
import { ActionService } from './services/action.service';
import { UiTesterComponent } from './components/ui-tester/ui-tester.component';

const routes: Routes = [
  { path: '', redirectTo: '/master', pathMatch: 'full' },
  { path: 'master', component: MasterComponent },
  { path: 'master/report/:id', component: ReportComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ReportDetailsComponent,
    LoaderComponent,
    MasterComponent,
    UiTesterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [ResultService, Title, ActionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
