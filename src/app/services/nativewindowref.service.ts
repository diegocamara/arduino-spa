import { Injectable } from '@angular/core';

function getWindow(): any{
    return window;
}

@Injectable()
export class NativeWindowRefService {

    constructor() { }

    get nativeWindow(): any {
        return getWindow();
    }
    

}