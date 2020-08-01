import React , { useEffect } from 'react';
import {connect} from 'react-redux';



function Messages (props){
  console.log('HIIIII FROM Messages COMPONENT');

  return (
    <section>
      <ul>
        {
          props.messages.map((msg , j) =>{
       
            return (
              <>
                <li key={j} >{msg.payload}</li>
              </>
            );
          })
        }
      </ul>
    </section>
  );
}

const mapStateToProps = (state) =>{
  return {
    // rooms : state.rooms.chatRooms ,
    messages : state.rooms.messages ,
    // token : state.auth.token ,
  };
} ;

const mapDispatchToProps = (dispatch) => ({
//   getRooms:(token) => dispatch(getRooms(token)),
//   getMessages:(messages) => dispatch(getMessages(messages)),
});

export default connect(mapStateToProps  , mapDispatchToProps)(Messages);