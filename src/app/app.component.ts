import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pro-app';
  loadedFeature = 'recipe';


  onNaviagte(feature :string){
    this.loadedFeature = feature;
  }
}
