
//1번 -가들어간 문자를 카멜표기법 문자열로 반환하는함수
let str='background-color'
function CSStoKamel(str){
    str=str.toLowerCase();
    let new_str=str.split('-');
    let result=new_str[0];
    for(let i =1 ;i<new_str.length;i++){
        result+=new_str[i].charAt(0).toUpperCase() + new_str[i].slice(1);
    }
    return result;
    }
console.log('카멜표기법',CSStoKamel(str));
//2번 객체배열을 나이기준으로 오름차순정렬후 반환하는함수

let objArr=[
    {name:'민경민',age:25},
    {name:'황정민',age:52},
    {name:'안유진',age:22},
    {name:'지아코',age:28},
    {name:'박혜진',age:40}
]

function sortByAge(arr){
    arr.sort(function(a,b){return a.age-b.age;})
    return arr
}
console.log('나이순 정렬',sortByAge(objArr));
//3번 성+이름 합처서 반환   

let objArr2=[
    {name:'경민',firstName:'민',hobby:'movie'},
    {name:'프로',firstName:'민',hobby:'cocain'},
    {name:'현정',firstName:'장',hobby:'baseball'},
    {name:'상엽',firstName:'이',hobby:'baseball'},
    {name:'도윤',firstName:'김',hobby:'baseball'},
];
function getUnionName(arr){
    let nameArr=[];
    for (let i = 0; i < arr.length; i++) {
        nameArr[i]= arr[i].firstName+arr[i].name;
    }
    return nameArr;
}
console.log('성이름합치기',getUnionName(objArr2));

//4번 배열 필터 및 정렬

let nArr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function filterNSortNumber(numArr,minNum,maxNum){
    
    let new_arr = numArr.filter(element=> minNum<=element&&maxNum>=element);
    return new_arr.sort((element,element2)=> element2-element)
}
console.log('필터 및 정렬',filterNSortNumber(nArr,3,8));

//5번 splice로 a~b 요소만 남기고 전부제거하는 메서드

let arr=[59,33,21,22,11,9,2,3,4,6,8,99,0,12,14,16,7];
function spliceArr(arr,a,b){
    arr.sort((x,y)=>x-y);
    let front=0;
    let rear=0;
    if(a<b){
        front=getStartIndex(arr,a);
        rear=getEndIndex(arr,b);
    }else{
        front=getStartIndex(arr,b);
        rear=getEndIndex(arr,a);
    }
    arr.splice(0,front);
    arr.splice(rear-front,arr.length);
    
}
//시작인덱스를찾아주는 함수
function getStartIndex(arr,target){
    for (let i = arr.length-1; i >=0; i--) {
        if(arr[i]<target){
            return i+1;
        }
        if(i==0){
            return i;
        }
    }
}
//끝인덱스를 찾아주는 함수.
function getEndIndex(arr,target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>target){
            return i;
        }
        if(i==arr.length-1){
            return i;
        }
        
    }
}
spliceArr(arr,6,59)
console.log('원본배열',arr)


//6익명함수를 화살표함수로 변경.
let test1=()=>(alert("민프로"));

let test2=(element)=>(((element=="rudals")?"밥은 좝솼서?":""));

[1,2,3,4,5].forEach((item)=>(console.log(item)));

[1,2,3,4,5].filter((item,index)=>(index!=0?item%2==0?true:false:false));
