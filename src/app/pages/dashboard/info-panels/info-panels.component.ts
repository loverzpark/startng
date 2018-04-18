import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-info-panels',
  templateUrl: './info-panels.component.html',
  encapsulation: ViewEncapsulation.None
})
export class InfoPanelsComponent {
  
  public nbrPayement = [{ name:'nombre de payement', value:30000}];
  public nbrPayementBgColor = { domain: ['#D22E2E'] };

  public mtnTotalPaye = [{ name:'montant total', value:30000, extra: { format: 'currency' } }];
  public mtnTotalPayeBgColor = { domain: ['#3E50B4'] };

  

  public infoLabelFormat(c): string {
 
    switch(c.data.name) {
      case 'nombre de payement':
      return `<i class="fa fa-pie-chart mr-2"></i>${c.label}`;
        case 'montant total':
        return `<i class="fa fa-cc-mastercard mr-2" aria-hidden="true"></i>${c.label}`;
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
     setTimeout(() => this.nbrPayement = [...this.nbrPayement] ); 
     setTimeout(() => this.mtnTotalPaye = [...this.mtnTotalPaye] ); 
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
