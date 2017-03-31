import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "app/pages/home/home.component";
import { BoardComponent } from "app/pages/board/board.component";

const APP_ROUTERS: Routes = [
    {
        path: '', component: HomeComponent,
        children: [{path: 'board', component: BoardComponent}]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTERS);