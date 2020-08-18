function hello(name){
    console.log(`hello ${name}!`);
}

function getGrade(score){
    if(score===100){
        return 'A+';
    }
    else if(score>=90){
        return 'A';
    }
    else if(score===89){
        return 'B+';
    }

}
const grade = getGrade(100);
console.log(grade);

const add = (a,b) => {
    return a+b;
}
const add = (a,b)=> a+b;
const sum = add(1,2);
const hello = (name) =>{
    console.log(`hello, ${name}!`);
}

const dogName = '멍멍이';
const dogAge = 2;

const dog ={
    name: '멍멍이',
    age: 2,
    cute: true,
    sample:{
        a:1,
        b:2,
    }
};
console.log(dog.name,dog.age);

const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어'
};

function print(hero){
    const text = `${hero.name} 배우 ${hero.actor}이다.`;
    console.log(test);
};
function print2(hero){
    const {name, actor} =hero;
    const text = `${name}이름 ${actor}배역`;
    console.log(text);
}
function print3({name, actor}){
    const text = `${name}이름 ${actor}배역`;
    console.log(text);
}
print(ironMan);
const{name}=ironMan;
console.log(name);

const dog ={
    name: '멍멍이',
    sound: '멍멍!',
    say: function say(){ //say(){} 이렇게 써도 가능 say:()=>{} 화살표는 this를 자기가 속해있는곳으로 연결안함
        console.log(this.sound); //this는 dog
    }
};
dog.say();
const cat ={
    name: '야옹이',
    sound:'야옹~',

};
cat.say = dog.say;
cat.say(); //야옹출력
// const catSay=cat.say;  에러. 

const numbers={
    a:1,
    b:2,
    get sum(){
        console.log('sum함수 실행!');
        return this.a + this.b;
    }
};
numbers.a=5;
console.log(numbers); //5로 수정
console.log(numbers.sum);
numbers.b=5;
console.log(numbers.sum);

const dog2={
    _name: '멍멍이',
    set name(value){
        this._name=value;
        console.log('이름이바뀜');
    }
};

console.log(dog2._name); //멍멍이
dog2.name ='뭉뭉이',
console.log(dog2._name); //뭉뭉이로 변경

const numbers ={
    _a:1,
    _b:2,
    sum:3,
    calculate(){
        console.log('cal');
        this.sum=this._a + this._b;
    },
    get a(){
        return this._a;
    },
    get b(){
        return this._b;
    },
    set a(value){
        this._a =value;
        this.calculate();
    },
    set b(value){
        this._b=value;
        this.calculate();
    },  
};

console.log(numbers.sum);
numbers.a=5;
numbers.b=11;
console.log(numbers.sum); //변경

//배열

const array =[1,2,3,4,5,'balea',{}];
console.log(array[0]);

const object =[
    {name: '멍멍'},
    {name: '야옹'},
];
console.log(object[0]);
object.push({
    name:'멍뭉이'
});
console.log(object);
console.log(object.length); //3

//반복
for (let i= 0; i<10; i++){
    console.log(i);
}
const names =['멍멍','야옹','멍뭉'];
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}
let i=0;
while(i<10){ //true까지 
    console.log(i);
    i++;
}

const numbers=[10,20,30,40,50];
for(let number of numbers){
    console.log(number);
}
const doggy ={
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};
console.log(Object.keys(doggy));
console.log(Object.values(doggy));
console.log(Object.entries(doggy));

for(let key in doggy){
    console.log(`${key}: ${doggy[key]}`);
}

for(let i=0; i<10; i++){
    if(i===2) continue;
    if(i===5) break;
    console.log(i);
}

function sumOf(numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }
    return sum;
}
const result = sumOf([1,2,3,4,5]);
console.log(result);

const superheroes =[
    '아이언맨',
    '캡틴 아메리카',
    '토르'
]
for(let i=0; i<superheroes.length; i++){
    console.log(superheroes[i]);
}

superheroes.forEach(hero => {
    console.log(hero);
});

const array=[1,2,3,4,5,6,7,8];
const squared =[];
for(let i=0; i<array.length; i++){
    squared.push(array[i]*array[i]);
}
array.forEach(n=>{
    squared.push(n*n);
});

const square = n => n*n;
const squared = array.map(square);

const items = [
    {
        id:1,
        text: 'heel'
    },
    {
        id:2,
        text: 'bye'
    }
];

const texts = items.map(item=>item.text);
console.log(texts);

const superheroes=['아이언맨','캡틴','토르'];
const index = superheroes.indexOf('토르'); //특정 위치알기
console.log(index);

const todos =[
    {
        id:1,
        text: '입문',
        done: true
    },
    {
        id: 2,
        text: '배우기',
        done: true,
    },
    {
        id: 4,
        text: '배우기투',
        done: false
    }
];
const index = todos.findIndex(todo => todo.id===3)  //id가 3인경우..찾기 find는 전체를 ..
console.log(index);

const task = todos.filter(todo => todo.done ===false);
console.log(task); //배열으로 가져오기

const numbers = [10,20,30,40];
const index = numbers.indexOf(30);
numbers.splice(index,2); //인덱스부터 2개 지운다. 기존배열이 바뀜.

const sliced = numbers.slice(0,2); //기존의 배열은 안바뀐다.

const value = numbers.shift(); //10 첫번째 빼오기 배열변경됨. 
numbers.pop(); // 40을 꺼냄; 맨뒤
numbers.unshift(5); //맨 앞부분에 5를 추가
numbers.push(50); //50맨뒤 추가

const arr1=[1,2,3];
const arr2=[4,5,6];
const concated = arr1.concat(arr2); // [...arr1,...arr2]; 
//기존 배열은 건들지 않음
const array=[1,2,3,4,5];
console.log(array.join()); //문자열로 바꿈
array.join(' '); //띄어쓰기로 ..

const numbers=[1,2,3,4,5];
const sum = numbers.reduce((accumulator,current)=> accumulator+current,0); //배열 다 더하기..
const avg = numbers.reduce((accumulator,current,index,array)=>{
    if(index === array.length-1){
        return (accumulator+current)/array.length;
    }
    return accumulator+ current;
},0);

function Animal(type, name, sound){
    this.type=type;
    this.name= name;
    this.sound=sound;
    // this.say=function(){
    //     console.log(this.sound);
    // }
}
Animal.prototype.say=function(){
    console.log(this.sound); //중복 문제제거
}

function dog(name,sound){
    Animal.call(this,'개',name,sound); //상속
}
function cat(name,sound){
    Animal.call(this,'고양이',name,sound);
}
dog.prototype=Animal.prototype;
cat.prototype=Animal.prototype;

const dog = new dog('멍멍이','멍멍');
const cat = new cat('야아옹','미야옹');
dog.say();

class Animal{
    constructor(type,name,sound){
        this.type=type;
        this.name=name;
        this.sound=sound;
    }
    say(){
        console.log(this.sound);
    }
}

class dog extends Animal{
    constructor(name,sound){
        super('개',name,sound);
    }
}

const dog = new dog('멍멍이','멍멍');

class Food{
    constructor(name){
        this.name =name;
        this.brands =[];
    }
    addBrand(brand){
        this.brands.push(brand)
    }
    print(){
        console.log(`${this.name}을 파는 음식점들`)
        console.log(this.brands.join(', '));
    }
}
const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노');

const chicken =new Food('치킨');
chicken.addBrand('굽네');
chicken.addBrand('bbq');

pizza.print();
chicken.print();

