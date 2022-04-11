import { Observable } from "rxjs";

// OBSERVABLE
const observable = new Observable((subscriber)=>{
    subscriber.next('Hello world')
    subscriber.error('Error!')
    subscriber.next('test')

    // Terminate the process-observable
    subscriber.complete()
    subscriber.next()
})

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