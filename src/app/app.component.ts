import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pro-app';

  constructor(private loggingService : LoggingService){}


  ngOnInit(){
    this.loggingService.printLog("Logging from App Component ngOnInit");
  }
  
  // loadedFeature = 'recipe';


  // onNaviagte(feature :string){
  //   this.loadedFeature = feature;
  // }
}
