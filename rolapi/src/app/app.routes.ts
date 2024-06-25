import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { SideBarRightComponent } from './components/side-bar-right/side-bar-right.component';

export const routes: Routes = [
    {path: "", component:BodyComponent},
    {path:"mama", component:SideBarRightComponent}
];
