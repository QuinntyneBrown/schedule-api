import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ChannelService } from "./channel.service";
import { ScheduleItemService } from "./schedule-item.service";

const declarables = [];
const providers = [ChannelService, ScheduleItemService];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ServicesModule { }
