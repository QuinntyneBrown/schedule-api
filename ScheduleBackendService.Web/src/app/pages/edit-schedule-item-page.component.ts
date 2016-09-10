import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./edit-schedule-item-page.component.html"),
    styles: [require("./edit-schedule-item-page.component.scss")],
    selector: "edit-schedule-item-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditScheduleItemPageComponent implements OnInit { 
    ngOnInit() {

    }
}
