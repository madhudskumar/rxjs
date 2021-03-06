import Rx = require("rxjs/Rx");

//TODO: psrt 1
// -------------------------------------------
// const simple$ = new Rx.Observable(observer => {
//     console.log("generating observable");
//     setTimeout(() => {
//         observer.next("An item");
//         setTimeout(() => {
//             observer.next("another item");
//             observer.complete();
//         }, 1000)
//     }, 1000);
// });

// const error$ = new Rx.Observable(observer => {
//     observer.error(new Error("WOHA !"));
// });

// simple$.subscribe(
//     item => console.log('one.next' + item),
//     error => console.log(`one.error ${error}`),
//     () => console.log("one.complete")
// );

// setTimeout(() => {
//     simple$.subscribe({
//         next: item => console.log(`two.item` + item),
//         error(error){
//             console.log(`two.error ${error}`)
//         },
//         complete: () => console.log('two.complete')
//     })
// }, 3000);

// error$.subscribe({
//     next:() => {},
//     error(err){
//         console.log(`error.err ${err.stack}`);
//     },
//     complete:() => {}
// })

//TODO: part 2
//-------------------------------------------------------
function createInterval(time){
    return new Rx.Observable(observer => {
        let index = 0;
        setInterval(() => {
            observer.next(index++);
        }, time);
    })
}

function createSubscription(tag){
    return {
        next(item) {
            console.log(`${tag}.next ${item}`)
        },
        error(err){
            console.log(`${tag}.next ${err.stack || err}`);
        },
        complete(){
            console.log(`${tag}.complete`);
        }
    };
}


const everySec$ = createInterval(1000);
everySec$.subscribe(createSubscription("one"));