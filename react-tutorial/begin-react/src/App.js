import React,{useRef,useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const [inputs, setInputs]=useState({
    username: '',
    email: '',
  });
  const {username,email}=inputs;

  const onChange = e =>{
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users,setUsers] = useState([
        {
            id: 1,
            username: 'geeyong',
            email: 'wlwyd228@gmail.com',
            active:true,
        },
        {
            id:2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id:3,
            username: 'liz',
            email: 'liz@exampele.com',
            active: false,
        }
    ]);
    const nextId= useRef(4);

    const onCreate = () =>{
      const user ={
        id: nextId.current,
        username,
        email,
      };
      setUsers([...users,user]);
      setInputs({
        username:'',
        email:''
      });
      // console.log(nextId.current) //4
      nextId.current+=1; //4+1
    }
    const onRemove = id => {
      setUsers(users.filter(user=>user.id !== id)); //트루인거만 가지고 배열을 만듬
    };

    const onToggle = id => {
      setUsers(users.map(
        user => user.id === id 
        ? {...user, active: !user.active} 
        : user
      ));
    };
  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
    <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
    // <InputSample>
    // </InputSample>
    // <Counter>

    // </Counter>
    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial></Hello>
    //   <Hello color="pink"></Hello>
    // </Wrapper>
  );
}

export default App;
