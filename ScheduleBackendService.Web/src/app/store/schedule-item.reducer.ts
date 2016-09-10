import { Action } from "@ngrx/store";
import { ADD_SCHEDULE_ITEM_SUCCESS, GET_SCHEDULE_ITEM_SUCCESS, REMOVE_SCHEDULE_ITEM_SUCCESS } from "../constants";
import { initialState } from "./initial-state";
import { AppState } from "./app-state";
import { ScheduleItem } from "../models";
import { addOrUpdate, pluckOut } from "../utilities";

export const scheduleItemsReducer = (state: AppState = initialState, action: Action) => {
    switch (action.type) {
        case ADD_SCHEDULE_ITEM_SUCCESS:
            var entities: Array<ScheduleItem> = state.scheduleItems;
            var entity: ScheduleItem = action.payload;
            addOrUpdate({ items: entities, item: entity});            
            return Object.assign({}, state, { scheduleItems: entities });

        case GET_SCHEDULE_ITEM_SUCCESS:
            var entities: Array<ScheduleItem> = state.scheduleItems;
            var newOrExistingScheduleItems: Array<ScheduleItem> = action.payload;
            for (let i = 0; i < newOrExistingScheduleItems.length; i++) {
                addOrUpdate({ items: entities, item: newOrExistingScheduleItems[i] });
            }                                    
            return Object.assign({}, state, { scheduleItems: entities });

        case REMOVE_SCHEDULE_ITEM_SUCCESS:
            var entities: Array<ScheduleItem> = state.scheduleItems;
            var id = action.payload;
            pluckOut({ value: id, items: entities });
            return Object.assign({}, state, { scheduleItems: entities });

        default:
            return state;
    }
}

