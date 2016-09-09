import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ActionsComponent } from './actions.component';

const declarables = [ActionsComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ActionsModule { }
