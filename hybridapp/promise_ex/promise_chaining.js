//1 초뒤에 2초뒤에 3초뒤에 로그

const p1 = new Promise( (resolve, reject) => {

    setTimeout( ()=>{
        resolve ({ p1_text: "p1 텍스트"});
    }, 1000)
});


const p2 = new Promise( (resolve, reject) => {

    setTimeout( ()=>{
        reject("error error");
        //resolve ({ p2_text: "p2 텍스트"});
    }, 3000)
});





// p1.then( result1 => {
//     console.log("p1 = " + result1);
//     return p2;

// }).then( (result2) =>{
//     console.log("p2 = " + result2.p2_text);
// });

//promise all 
Promise.all ( [p1, p2] ).then( (result) => {
    console.log("p1 = " + result[0].p1_text);
    console.log("p2 = " + result[1].p2_text);
}).catch(err => {
    console.log(err);
});