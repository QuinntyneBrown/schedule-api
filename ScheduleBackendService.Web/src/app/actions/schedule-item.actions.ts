import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ScheduleItemService } from "../services";
import { AppState, AppStore } from "../store";
import { ADD_SCHEDULE_ITEM_SUCCESS, GET_SCHEDULE_ITEM_SUCCESS, REMOVE_SCHEDULE_ITEM_SUCCESS } from "../constants";
import { ScheduleItem } from "../models";
import { Observable } from "rxjs";
import { guid } from "../utilities";

@Injectable()
export class ScheduleItemActions {
    constructor(private _scheduleItemService: ScheduleItemService, private _store: AppStore) { }

    public add(scheduleItem: ScheduleItem) {
        const newGuid = guid();
        this._scheduleItemService.add(scheduleItem)
            .subscribe(book => {
                this._store.dispatch({
                    type: ADD_SCHEDULE_ITEM_SUCCESS,
                    payload: scheduleItem
                },newGuid);                
            });
        return newGuid;
    }

    public get() {                          
        return this._scheduleItemService.get()
            .subscribe(scheduleItems => {
                this._store.dispatch({
                    type: GET_SCHEDULE_ITEM_SUCCESS,
                    payload: scheduleItems
                });
                return true;
            });
    }

    public remove(options: {id: number}) {
        return this._scheduleItemService.remove({ id: options.id })
            .subscribe(scheduleItem => {
                this._store.dispatch({
                    type: REMOVE_SCHEDULE_ITEM_SUCCESS,
                    payload: options.id
                });
                return true;
            });
    }

    public getById(options: { id: number }) {
        return this._scheduleItemService.getById({ id: options.id })
            .subscribe(scheduleItem => {
                this._store.dispatch({
                    type: GET_SCHEDULE_ITEM_SUCCESS,
                    payload: [scheduleItem]
                });
                return true;
            });
    }
}
