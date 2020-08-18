const array =[1,2];
let text = array.length === 0 ? '배열이있다.':'없다';
console.log(text);

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

console.log(true && 'hello'); //앞에가 트루면 결과는 hello
console.log(null && 'hello'); //앞에가 false면 뒤에 보지않고 앞에 출력

console.log(false || 'hello'); //hello출력  앞에 false이면 뒤에가 결과
console.log(1||'음?');//앞에가 true면 뒤 내용 안보고 앞에 1출력 //앞에꺼 없으면 뒤에꺼 사용할래.

function makeSound(animal){
    const tasks ={
        개:()=>{
            console.log('멍멍');
        },
        비둘기(){
            console.log('구구구');
        }
    }
    const task = task[animal];
    if(!task){
        console.log('??');
        return;
    }
    task();
}

makeSound('개');
makeSound('인간');
makeSound('비둘기');

const animal={
    name: '몽이',
};
const {name: nickname} =animal;
console.log(nickname);

const deepObject={
    state:{
        information:{
            name:'geeyong',
            languages:['korea','english']
        }
    },
    value:5
}
const {name,languages}=deepObject.state.information;
const {value}=deepObject;
const extracted={
    name,
    languages,
    value
};
console.log(extracted);

const slime ={
    name: '슬라임'
};
const cuteSlime={
    ...slime, //name: '슬라임'
    attribute: 'cute'
};
const purpleCuteSlime={
    ...cuteSlime,
    color:'purple'
};
console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const {color, ...rest} = purpleCuteSlime;
console.log(color);
console.log(rest); //컬러빼고 나머지..모아옴

function sum(...rest){//배열으로 들어옴
    return rest.reduce((acc,current)=>acc+current,0);

}
console.log(sum(1,2,3,4,5));

function subtract(x,y){
    return x-y;
}
const numbers=[1,2];
const result =subtract(...numbers);
console.log(result);

console.log(sum(...numbers));

//비동기
function work(callback){
    setTimeout(()=>{
        const start = Date.now();
        for(let i= 0; i<10000000; i++){

        }
        const end = Date.now();
        console.log(end-start +'ms');
        callback(end-start);
    },0)
}
console.log('작업시작');
work((ms)=>{ //백그라운드
    console.log('작업끝');
    console.log(ms + 'ms걸림');
});
console.log('다음작업');

function increaseAndPrint(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const value = n+1;
            if(value===5){
                const error =new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        },1000);
    });
}
increaseAndPrint(0).then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.error(e);
})

//async/await

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function process(){
    console.log('hi');
    await sleep(1000);
    console.log('bye');
}
process();

const getDog = async () =>{
    await sleep(1000);
    return '멍멍';
}
const getRabbit = async()=>{
    await sleep(500);
    return '토끼';
}
const getTurtle = async() =>{
    await sleep(3000);
    return '거북이';
}
async function process2(){
    const results = await Promise.all([getDog(),getRabbit(),getTurtle()]);
    console.log(results);
    const [dog,rabbit,turtle]=await Promise.all([getDog(),getRabbit(),getTurtle()]);
    console.log(dog,rabbit,turtle);

    const first =await Promise.race([getDog(),getRabbit(),getTurtle()]);
    console.log(first); //가장 빨리끝나는 토끼가 출력

}

async function process3(){
    try{
        const rabbit = await Promise.race([getDog(),getRabbit(),getTurtle()]);
    }
    catch(e){
        console.log(e);
    }
    //Promise.all은 셋중에 하나라도 에러이면 전체 프로세스가 에러로 감지
    //race는 가장 빨리 끝난것이 에러일때만 에러로 감지

}
process2();

