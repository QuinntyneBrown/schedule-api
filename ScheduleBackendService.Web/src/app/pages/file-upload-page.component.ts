import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./file-upload-page.component.html"),
    styles: [require("./file-upload-page.component.scss")],
    selector: "file-upload-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploadPageComponent implements OnInit { 
    ngOnInit() {

    }
}
