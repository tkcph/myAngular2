import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent} from './header/header.component';
import { CustomerComponent } from './customers/customer.component';
import { PageOneComponent } from './pages/page-one.component';
import { PageTwoComponent } from './pages/page-two.component';



@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent, CustomerComponent, PageOneComponent, PageTwoComponent]
})
export class AppComponent { }
