import { Injectable } from '@angular/core';
import { ShortUrl } from 'src/app/interfaces/shortUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const backendUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }


  getAllUrls(): Promise<any>{
    const promise = new Promise<any>((resolve, reject) => {
      this.http.get(backendUrl + "/shorturl")
      .subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });

    return promise;
  }

  getUrlByShortValue(shortUrlValue: String): Promise<any>{
    const promise = new Promise<any>((resolve, reject) => {
      this.http.get(backendUrl + "/shorturl/find?shortValue=" + shortUrlValue)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (error: any) => {
            reject(error);
          }
        })
    })

    return promise;
  }

  deleteUrlById(id: number): Promise<any> { 
    const promise = new Promise<any>((resolve, reject) => {
      this.http.delete(backendUrl + "/shorturl/" + id)
        .subscribe({
          next: (res: any) => {
            resolve(res);
          },
          error: (error: any) => {
            reject(error);
          }
        });
    });

    return promise;
  }

  postUrl(url: string): Promise<any>{
    var shortUrl: ShortUrl = {
      shortUrl: "",
      originalUrl: url
    };

    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Accept': '*/*'
      })
    }

    const promise = new Promise<any>((resolve, reject) => {
      this.http.post(backendUrl + "/shorturl", shortUrl, httpOption)
        .subscribe({
          next: (res: any) => {
            console.log(res);
            resolve(res);
          },
          error: (error: any) => {
            console.log(error);
            reject(error);
          }
        });
    });

    return promise;
  }
}
