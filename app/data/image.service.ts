import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ImageService {
  private apiUrl = 'https://picsum.photos/v2';

  constructor(private http: HttpClient) {}

  getRandomImages(count: number): Observable<any[]> {
    const url = `${this.apiUrl}/list?limit=${count}`;

    return this.http.get<any[]>(url);
  }
}

// import { Injectable } from '@angular/core';

// @Injectable()
// export class ImageService {

//   constructor() { }

// }

// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class ImageService {
//   private apiUrl = 'https://picsum.photos';

//   constructor(private http: HttpClient) {}

//   getRandomImage(width: number, height: number): Observable<string> {
//     const url = `${this.apiUrl}/${width}/${height}`;

//     return this.http.get(url, { responseType: 'text' });
//   }
// }

// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class ImageService {
//   private apiUrl = 'https://picsum.photos';

//   constructor(private http: HttpClient) {}

//   getAllImages(): Observable<any> {
//     const url = `${this.apiUrl}/list`;

//     return this.http.get<any[]>(url);
//   }
// }
