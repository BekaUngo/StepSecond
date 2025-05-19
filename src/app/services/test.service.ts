import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, from, map, of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";


@Injectable()
export class TestService {

    constructor(
        private http: HttpClient
    ){}

    httpUrl:string = 'https://restaurant.stepprojects.ge/api/Products/GetAll'
    myAge:number = 0;
    randomObservable = from(['beka', 'sandro', 50])
    randomObservable2 = of(1, 2, 3, 4, 5, 6,7, 7, 9, 10, 400).pipe(
        map((value)=>{
            return value * 2
        }),
        filter((value)=>{
            return value > 10
        }),
    )

    getProducts(){
        return this.http.get(this.httpUrl)
    }

    increaseNumber(){
        this.myAge++
    }

    decreaseNumber(){
        this.myAge--
    }

    getMyAge(){
        return this.myAge
    }

    myObservable = new Observable((observer)=>{
        observer.next(1),
        observer.next(2),
        observer.next(3),
        observer.error(new Error('რაცა შეცდომააა'))
        observer.next(4),
        observer.next(5),
        observer.error(new Error('meore error'))
        observer.complete()
    })

}

//RxJS - Reactive Extension for JavaScript
//Observable - stream of data
//pipe()
