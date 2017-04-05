export interface JohnnyFiveGlobal {
    five: string;
}

export abstract class GlobalRef {
    abstract get nativeGlobal(): JohnnyFiveGlobal;
}

export class BrowserGlobalRef extends GlobalRef {
   
   get nativeGlobal(): JohnnyFiveGlobal{
        return getWindow() as JohnnyFiveGlobal;
    }

}

function getWindow(): any{
    return window;
}

