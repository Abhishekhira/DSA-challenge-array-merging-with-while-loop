console.log('this file is connected');
let arr =[24,25,36,89,54,78,52];
let arr2=[25,56,66,25,45]
let arr3=[]
let a1=0;
let a2=0;
let a3=0;
while (a1<arr.length && a2 <arr2.length) {
    if (arr[a1]<arr2[a2]) {
        arr3[a3]=arr[a1]
        a1++;
    }else{
        arr3[a3]=arr2[a2]
        a2++
    }
    a3++;
}
console.log(arr3)
while (a1<arr.length) {
 arr3[a3]=arr[a1] ; 
 a1++;
 a3++; 
}

console.log(arr3)