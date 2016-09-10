import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./channel-list-page.component.html"),
    styles: [require("./channel-list-page.component.scss")],
    selector: "channel-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelListPageComponent implements OnInit { 
    ngOnInit() {

    }
}
