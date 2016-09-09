import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { ChannelActions } from "../actions";
import { AppStore } from "../store";
import { Observable } from "rxjs";
import { Channel } from "../models";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit { 

    constructor(
        private _channelActions: ChannelActions,
        private _store: AppStore
    ) { }

    ngOnInit() {
        this._channelActions.get();
    }

    public get channels$(): Observable<Array<Channel>> {
        return this._store.channels$();
    };
}
