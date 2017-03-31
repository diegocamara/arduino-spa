import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "app/pages/home/home.component";

const APP_ROUTERS: Routes = [
    {
        path: '', component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTERS);