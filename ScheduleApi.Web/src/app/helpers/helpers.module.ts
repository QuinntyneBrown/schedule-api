import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpHelper } from "./http-helper";

const declarables = [];
const providers = [HttpHelper];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class HelpersModule { }
