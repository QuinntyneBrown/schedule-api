import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { RoutingComponent } from './routing.component';

const declarables = [RoutingComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class RoutingModule { }
