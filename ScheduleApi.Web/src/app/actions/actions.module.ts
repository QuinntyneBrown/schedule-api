import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ScheduleItemActions } from "./schedule-item.actions";
import { ChannelActions } from "./channel.actions";
import { EpisodeActions } from "./episode.actions";
import { TvShowActions } from "./tv-show.actions";

const providers = [ChannelActions, EpisodeActions, ScheduleItemActions, TvShowActions];

const declarables = [];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables],
	providers: providers
})
export class ActionsModule { }
