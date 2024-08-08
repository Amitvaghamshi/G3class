//only we can use for the array


let arr=[1,5,6,3,4,7,8,10];

let ans=arr.filter((el)=>{
       if(el%2==0){
        return true;
       }else{
        return false;
       }
});
console.log(ans);

