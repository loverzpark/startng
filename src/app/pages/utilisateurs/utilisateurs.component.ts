import { OnInit, Component,ViewEncapsulation} from'@angular/core'

@Component({
    selector:'utilisateursComponent',
    templateUrl: './utilisateurs.component.html',
    styleUrls:['./utilisateurs.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UtilisateursComponent implements OnInit {


    constructor(){     
    }

    ngOnInit() {            
    }
}