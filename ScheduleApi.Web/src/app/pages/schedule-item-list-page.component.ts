import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./schedule-item-list-page.component.html"),
    styles: [require("./schedule-item-list-page.component.scss")],
    selector: "schedule-item-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleItemListPageComponent implements OnInit { 
    ngOnInit() {

    }
}
