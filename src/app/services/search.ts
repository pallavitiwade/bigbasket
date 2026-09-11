import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";




@Injectable({
    providedIn:'root'
})

export class SearchService{

private searchSubject = new Subject<string>();
searchValue$=this.searchSubject.asObservable();
sendSearchValue(value:string){
    this.searchSubject.next(value)
}    


}