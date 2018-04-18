import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-info-panels',
  templateUrl: './info-panels.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InfoPanelsComponent {
  
  public nbrePayement = [{ name:'Nombre de payement', value:58}];
  public nbrePayementBgColor = { domain: ['#2F3E9E'] };

  public mtnTotalDePayement = [{ name:'likes', value:25000000,extra: { format: 'currency' }  }];
  public mtnTotalDePayementBgColor = { domain: ['#D22E2E'] };

  

  public infoLabelFormat(c): string {
    switch(c.data.name) {
      case 'nbrePayement':
        return `<i class="fa fa-shopping-cart mr-2"></i>${c.label}`;
      case 'mtnTotalDePayement':
        return `<i class="fa fa-thumbs-o-up mr-2"></i>${c.label}`;
     
      default:
        return c.label;
    }
  }

  public infoValueFormat(c): string {
    switch(c.data.extra ? c.data.extra.format : '') {
      case 'currency':
        return `\$${Math.round(c.value).toLocaleString()}`;
      case 'percent':
        return `${Math.round(c.value * 100)}%`;
      default:
        return c.value.toLocaleString();
    }
  }

  public previousShowMenuOption:boolean;
  public previousMenuOption:string;
  public previousMenuTypeOption:string;
  public settings: Settings;
  constructor(public appSettings:AppSettings) {    
    this.settings = this.appSettings.settings;
    this.initPreviousSettings();
  }

  public onSelect(event) {
    console.log(event);
  }



  public ngDoCheck() {
    if(this.checkAppSettingsChanges()) {
      setTimeout(() => this.nbrePayement = [...this.nbrePayement] ); 
      setTimeout(() => this.mtnTotalDePayement = [...this.mtnTotalDePayement] ); 
      this.initPreviousSettings();
    }
  }

  public checkAppSettingsChanges(){
    if(this.previousShowMenuOption != this.settings.theme.showMenu ||
      this.previousMenuOption != this.settings.theme.menu ||
      this.previousMenuTypeOption != this.settings.theme.menuType){
      return true;
    }
    return false;
  }

  public initPreviousSettings(){
    this.previousShowMenuOption = this.settings.theme.showMenu;
    this.previousMenuOption = this.settings.theme.menu;
    this.previousMenuTypeOption = this.settings.theme.menuType;
  }

}
