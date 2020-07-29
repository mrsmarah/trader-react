import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';

const client = io.connect('https://trader401.herokuapp.com/');

function ClientComponent(props) {
//   const [response, setResponse] = useState('');
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);
  const [room ,setRoom] = useState('');

  useEffect(() => {

    client.on('connect', () => {
      client.on('joined', (joinedRoom) => {
        console.log('joinedRoom' ,joinedRoom);
        setRoom(joinedRoom);
      });
    
      //   client.on('message', ({ name, message })  => {
      //     setChat([...chat, { name, message }]);
      //   });

      client.on('message', (payload)  => {
        console.log('payload>>>>' ,payload);
        setChat([...chat, payload ]);
      });
    });

  }, []);

  useEffect(() => {

    client.emit('joinRoom',{ token: props.token , secondUser: props.secondUser });

  }, [props.secondUser]);

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
    console.log('chaaaat>>>>>>>>>>>>' , chat);
    return chat.map(({ username, text, time  }, index) => (
      <div key={index}>
        <h3>
          {username}: <span>{text}</span>
        </h3>
        <p>{time}</p>
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
            value={props.secondUser}
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

