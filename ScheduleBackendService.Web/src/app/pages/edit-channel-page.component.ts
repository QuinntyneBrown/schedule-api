import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./edit-channel-page.component.html"),
    styles: [require("./edit-channel-page.component.scss")],
    selector: "edit-channel-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditChannelPageComponent implements OnInit { 
    ngOnInit() {

    }
}
