import React,{useEffect}from 'react';
function User({user, onRemove,onToggle}){
    const {username,email,id,active}= user;
    // useEffect(()=>{
    //     console.log('컴포넌트가 화면에 나타남');
    //     return () =>{
    //         console.log('사라짐');
    //     };
    // },[]);
    useEffect(()=>{
        console.log(user);
    });

    return(
        <div>
        <b 
        style={{
            color: active ? 'green' : 'black',
            cursor: 'pointer'
        }}
        onClick ={()=>onToggle(id)}>
            {username}
            </b> 
            <span>({email})</span>
        <button onClick={()=>onRemove(id)}>삭제</button>
         </div>
    );
  }
function UserList({users,onRemove,onToggle}){
    // const users =[
    //     {
    //         id: 1,
    //         username: 'geeyong',
    //         email: 'wlwyd228@gmail.com'
    //     },
    //     {
    //         id:2,
    //         username: 'tester',
    //         email: 'tester@example.com'
    //     },
    //     {
    //         id:3,
    //         username: 'liz',
    //         email: 'liz@exampele.com'
    //     }
    // ];
    return(
        <div>  
            {
                users.map(
                    user=>(<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>)
                )
            }
            {/* <User user={users[0]}></User>
            <User user={users[1]}></User>
            <User user={users[2]}></User> */}
        </div>
    );
}
export default UserList;
