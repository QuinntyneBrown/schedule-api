import { ScheduleItem } from "../models";

export interface AppState {
    scheduleItems: Array<ScheduleItem>;
    currentUser: any;
    isLoggedIn: boolean;
    token: string;
}