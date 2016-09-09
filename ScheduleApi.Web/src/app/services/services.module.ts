import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ServicesComponent } from './services.component';

const declarables = [ServicesComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ServicesModule { }
