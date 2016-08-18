import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        
        $(".button-collapse").sideNav({
            closeOnClick: true
        });
        
     }

}