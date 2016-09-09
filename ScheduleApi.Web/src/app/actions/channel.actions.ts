import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ChannelService } from "../services";
import { AppState, AppStore } from "../store";
import { ADD_CHANNEL_SUCCESS, GET_CHANNEL_SUCCESS, REMOVE_CHANNEL_SUCCESS } from "../constants";
import { Channel } from "../models";
import { Observable } from "rxjs";
import { guid } from "../utilities";

@Injectable()
export class ChannelActions {
    constructor(private _channelService: ChannelService, private _store: AppStore) { }

    public add(channel: Channel) {
        const newGuid = guid();
        this._channelService.add(channel)
            .subscribe(book => {
                this._store.dispatch({
                    type: ADD_CHANNEL_SUCCESS,
                    payload: channel
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._channelService.get()
            .subscribe(channels => {
                this._store.dispatch({
                    type: GET_CHANNEL_SUCCESS,
                    payload: channels
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._channelService.remove({ id: options.id })
            .subscribe(channel => {
                this._store.dispatch({
                    type: REMOVE_CHANNEL_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._channelService.getById({ id: options.id })
            .subscribe(channel => {
                this._store.dispatch({
                    type: GET_CHANNEL_SUCCESS,
                    payload: [channel]
                });
                return true;
            });
    }
}
