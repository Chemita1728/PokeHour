import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// import { Hours } from './hour';
import { Hour } from './hour';


@Injectable({ providedIn: 'root' })
export class HourService {

    private hourUrl = 'https://localhost:7201';
    
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor( private http: HttpClient) { }

    // getHours(): Observable<Hours> {
    //     var query = this.http.get<Hours>(`${this.hourUrl}/hour`);
    //     // console.log(query);
    //     return query;
    // }
    getHours(): Observable<Hour> {
        var query = this.http.get<Hour>(`${this.hourUrl}/hour`);
        // console.log(query);
        return query;
    }

}