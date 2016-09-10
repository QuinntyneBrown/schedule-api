import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./edit-tv-show-page.component.html"),
    styles: [require("./edit-tv-show-page.component.scss")],
    selector: "edit-tv-show-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTvShowPageComponent implements OnInit { 
    ngOnInit() {

    }
}
