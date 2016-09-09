import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StoreComponent } from './store.component';

const declarables = [StoreComponent];
const providers = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class StoreModule { }
