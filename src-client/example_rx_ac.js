import $ from "jQuery";
import Rx from "rxjs/Rx";


const $title = $("#title");
const $results = $("#results");

//short hand
Rx.Observable.fromEvent($title, "keyup")
    .map(e => e.target.value)
    .distinctUntilChanged()
    .debounceTime(500)
    .switchMap(getItems)
    .subscribe(items =>{
        $results.empty();
        $results.append(items.map(r => $('<li />').text(r)));
    })

//long hand
// const keyup$ = Rx.Observable.fromEvent($title, "keyup");
// const queries$ = keyup$
//     .map(e => e.target.value)
//     .distinctUntilChanged()
//     .debounceTime(250)
//     .switchMap(getItems);

// queries$.subscribe(items => {
//     $results.empty();
//     $results.append(items.map(r => $('<li />').text(r)));
// });


// ---------------------------------- \\

function getItems(title) {
    console.log(`quering ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "item 2", `another ${Math.random()}`]);
        }, 500 + Math.random() * 2000);
    })
}