import { Observable } from "rxjs";

// OBSERVABLE
const observable = new Observable((subscriber)=>{
    subscriber.next('Hello world')
})

// OBSERVER-observer usually take a next function
observable.subscribe({
    next: (value) => {
        console.log(value);
    }
})