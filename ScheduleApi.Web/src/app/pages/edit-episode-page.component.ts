import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./edit-episode-page.component.html"),
    styles: [require("./edit-episode-page.component.scss")],
    selector: "edit-episode-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditEpisodePageComponent implements OnInit { 
    ngOnInit() {

    }
}
