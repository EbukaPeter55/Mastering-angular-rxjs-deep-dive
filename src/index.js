import { Observable } from "rxjs";

// OBSERVABLE
const observable = new Observable((subscriber)=>{
    const id = setInterval(()=> {
        subscriber.next('test')
    }, 1000)
    subscriber.complete()

    // Stop memory leak
    return () => {
        clearInterval(id)
    }
})
console.log("before");
// OBSERVER-observer usually take a next function
observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log('complete called!');
    },
    error: (err)=>{
        console.error(err);
    }
})