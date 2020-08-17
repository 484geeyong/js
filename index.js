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





