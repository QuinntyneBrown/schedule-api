import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Channel } from "../models";
import { Observable } from "rxjs";
import { extractData } from "../utilities";

import { HttpHelper } from "../helpers";

import { apiCofiguration } from "../configuration";


@Injectable()
export class ChannelService {
    constructor(private _http: Http, private _httpHelper: HttpHelper) { }

    public add(entity: Channel) {
        return this._http
            .post(`${apiCofiguration.baseUrl}/api/channel/add`, entity)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get() {        
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/channel/get`, { headers: this._httpHelper.headers })
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public getById(options: { id: number }) {
        return this._http
            .get(`${apiCofiguration.baseUrl}/api/channel/getById?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public remove(options: { id: number }) {
        return this._http
            .delete(`${apiCofiguration.baseUrl}/api/channel/remove?id=${options.id}`)
            .map(data => data.json())
            .catch(err => {
                return Observable.of(false);
            });
    }

    public get baseUrl() { return apiCofiguration.baseUrl; }

}
