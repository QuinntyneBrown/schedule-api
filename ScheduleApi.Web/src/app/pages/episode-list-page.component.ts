import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./episode-list-page.component.html"),
    styles: [require("./episode-list-page.component.scss")],
    selector: "h-episode-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeListPageComponent implements OnInit { 
    ngOnInit() {

    }
}
