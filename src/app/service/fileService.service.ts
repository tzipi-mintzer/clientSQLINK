import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Data } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export default class FileService {

    constructor(public http: HttpClient) { }
    routeUrl = `${environment.baseUrl}/Person`;
    sendExcelFile(file: File) {
        return this.http.post<Data>(`${this.routeUrl}/Post`, file);
    }
}