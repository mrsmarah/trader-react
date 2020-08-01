import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';

const client = io.connect('https://trader401.herokuapp.com/');
var cnt = 0;
function ClientComponent(props) {

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
    client.on('connect', () => {
      client.on('joined', (joinedRoom) => {
        console.log('joinedRoom' ,joinedRoom);
        setRoom(joinedRoom);
      });
    
      //   client.on('message', ({ name, message })  => {
      //     setChat([...chat, { name, message }]);
      //   });

      client.on('message', (payload)=> {
        console.log('payload>>>>' ,payload);
        // console.log('chat before >>>>' ,chat);[]
        // arrayTest.push(payload);
        // setChat([...chat,payload]);
        setMsg(payload);
        // setTimeout(() => {  setChat(arrayTest);; }, 0);
        
        console.log('msg after >>>>' ,msg);
      });
    });
  
  }, []);


  useEffect(() => {

    setChat([...chat,msg]);

  }, [msg]);


  useEffect(() => {

    client.emit('joinRoom',{ token: props.token , secondUser: username });

  }, [username]);

  const onTextChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = e => {
    e.preventDefault();
    const { name, message } = state;
    // client.emit('message', { name, message });
    client.emit('chatMessage', {msg : message , room: room});
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
        <p>{msg.time}</p>
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
    
  };
} ;
  
const mapDispatchToProps = (dispatch) => ({
//   getRemoteProduct: (id) => dispatch(getRemoteProduct(id) ),
//   addToFav: (id ,token ) => dispatch(addToFav(id ,token)),
//   getPost:(id ,token ) => dispatch(getPost(id ,token)),
});
  
export default connect(mapStateToProps , mapDispatchToProps )( ClientComponent );

