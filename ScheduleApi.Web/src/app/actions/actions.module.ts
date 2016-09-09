import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ScheduleItemActions } from "./schedule-item.actions";

const providers = [ScheduleItemActions];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ActionsModule { }
