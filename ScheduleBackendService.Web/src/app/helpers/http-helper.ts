import { Injectable } from "@angular/core";
import { Headers } from "@angular/http";

@Injectable()
export class HttpHelper {
    get headers() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}