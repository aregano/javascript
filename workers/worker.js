// onmessage = function (mess) {
//     let x = mess.data;
//     console.log(x);
//     this.postMessage(x+' Cualquier Mierda')
    
// }

onmessage = function (mess) {
    let nums = mess.data;
    console.log(nums);

    let result = nums.reduce((ant,act)=>{
        return ant + act;
    });
    
    this.postMessage(result)
    
}
