import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';


var cnt = 0;
function ClientComponent(props) {
  // const client = io.connect('https://trader401.herokuapp.com/');
  let{username} = useParams();
  //   const [response, setResponse] = useState('');
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState({});
  const [room ,setRoom] = useState('');
  console.log('cnt',cnt++,chat,room );
  let arrayTest = [];

  

  useEffect( () => {
   
    console.log('useeffect chat',chat);
    props.client.on('connect', () => {
      console.log('before emit',username);
      

      props.client.on('joined', (joinedRoom) => {
        console.log('joinedRoom' ,joinedRoom);
        setRoom(joinedRoom);
      });
    
      //  props. client.on('message', ({ name, message })  => {
      //     setChat([...chat, { name, message }]);
      //   });
      props.client.on('message', (payload)=> {
        console.log('payload>>>>' ,payload);
        // console.log('chat before >>>>' ,chat);[]
        // arrayTest.push(payload);
        // setChat([...chat,payload]);
        // while (msg !== payload) {
        //   setMsg(payload);
        // }
        setMsg(payload);
        // setTimeout(() => {  setMsg(payload);
        //   while (msg !== payload) {

          
        //   } }, 100);
        
        console.log('msg after >>>>' ,msg);
      });
      // props.client.emit('joinRoom',{ token: props.token , secondUser: username });

    });
    //props. client.emit('joinRoom',{ token: props.token , secondUser: username });
  }, [username]);


  useEffect(() => {

    setChat([...chat,msg]);

  }, [msg]);


  useEffect(() => {
    
    props.client.emit('unsubscribe',room);
    props.client.disconnect();
    props.client.connect();
    setChat([]);
    console.log('username changed >>>>',username );
    props.client.emit('joinRoom',{ token: props.token , secondUser: username });
    setChat([]);
  }, [username]);

  const onTextChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = e => {
    e.preventDefault();
    const { name, message } = state;
    //props. client.emit('message', { name, message });
    props.client.emit('chatMessage', {msg : message , room: room});
    setState({ message: '', name });
  };

  const renderChat = () => {
    console.log('chaaaat   map>>>>>>>>>>>>' , chat);
    // { username, text, time,payload,sender  }
    return chat.map((msg, index) => (
      <div key={index}>
        <h3>
          {msg.username||msg.sender}: <span>{msg.text||msg.payload }</span>
        </h3>
        <p>{msg.time||msg.date}</p>
      </div>
    ));
  };
 

  return (
    <div className="card">

      <form onSubmit={onMessageSubmit}>
        <h1>Messanger</h1>

        <div className="name-field">
          <label >Name</label>
          <input
            name="name"
            onChange={e => onTextChange(e)}
            value={username}
          />
        </div>

        <div>
          <label >Message</label>
          <input
            name="message"
            onChange={e => onTextChange(e)}
            value={state.message}
          />
        </div>

        <button>Send Message</button>
      </form>

      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>

    </div>
  );
}


const mapStateToProps = (state) =>{
  return {post : state.post,
    token : state.auth.token,
    client: state.auth.client,
  };
} ;
  
const mapDispatchToProps = (dispatch) => ({
//   getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
//   addToFav: (id ,token ) => dispatch(addToFav(id ,token)),
//   getPost:(id ,token ) => dispatch(getPost(id ,token)),
});
  
export default connect(mapStateToProps , mapDispatchToProps )( ClientComponent );

