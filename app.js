// let a = [3,8,9,4,6,7]
// let b = ["z","a","d","f"]


// console.log(a.sort());
// console.log(b.sort());
//  console.log(b.sort((a,b)=>b.localeCompare(a)));
//  console.log(a.sort((a,b)=>b-a));
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function countEvensAndOdds() {
    console.log(   "cut ededlerin sayi -"+numbers.filter(item=> item%2==0).length)
    console.log(   "tek ededlerin sayi -"+numbers.filter(item=> item%2==1).length)
}
countEvensAndOdds()


 




