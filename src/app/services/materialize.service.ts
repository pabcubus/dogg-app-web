import { Injectable } from '@angular/core';
import * as M from 'materialize-css';

@Injectable()
export class MaterializeService {
    constructor() {}

    public generateFixedButton(menuClass: string): void{
        var elems = document.querySelectorAll(`.${menuClass}`);
        var instances = M.FloatingActionButton.init(elems, {});
    }

    public generateSidenav(menuId: string): void{
        var elems = document.querySelectorAll(`#${menuId}`);
        var instance = M.Sidenav.init(elems, {});
    }
}