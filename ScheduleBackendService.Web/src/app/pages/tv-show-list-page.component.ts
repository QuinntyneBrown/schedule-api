import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./tv-show-list-page.component.html"),
    styles: [require("./tv-show-list-page.component.scss")],
    selector: "tv-show-list-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TvShowListPageComponent implements OnInit { 
    ngOnInit() {

    }
}
