import React , { useEffect } from 'react';
import {connect} from 'react-redux';
import {getRooms,getMessages} from '../../store/reducers/chat-Reducer';
import ChatMessages from './messages';
import ClientComponent from '../chat/index';
import { Link } from 'react-router-dom';


function Chats (props){

  console.log('HIIIII FROM CHAT COMPONENT');
  useEffect(() => {
    props.getRooms(props.token);
  },[]);

  return (
    <section>
      <ul>
        {
          props.rooms.map((room , i) =>{
       
            return (
              <>
                <li key={i}>

                  <Link to={`/chat/${props.username === room.firstUser ? room.secondUser : room.firstUser}`}>
                    {props.username === room.firstUser ? room.secondUser : room.firstUser}
                  </Link>
                  <p>{room.messages[0] ? room.messages[0].payload:''}</p>
                </li>
               
              </>
            );
          })
        }
      </ul>
     
      {/* <ChatMessages /> */}
    </section>
  );
}

const mapStateToProps = (state) =>{
  return {
    rooms : state.rooms.chatRooms ,
    token : state.auth.token ,
    username : state.auth.user.username ,
  };
} ;

const mapDispatchToProps = (dispatch) => ({
  getRooms:(token) => dispatch(getRooms(token)),
  getMessages:(messages) => dispatch(getMessages(messages)),
});

export default connect(mapStateToProps  , mapDispatchToProps)(Chats);


// <li key={i} onClick={ () =>{
//                   props.getMessages(room.messages);
//                 }}  >{room.secondUser}</li>