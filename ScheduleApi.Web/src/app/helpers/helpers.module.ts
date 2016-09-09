import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HelpersComponent } from './helpers.component';

const declarables = [HelpersComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class HelpersModule { }
