import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {connect} from 'react-redux';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './slider.scss';

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function Slider (props){
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  
  const slides = [];
  // for (let i = 0; i < 5; i += 1) {
  slides.push(
    props.post.onePost.images.map((img , j) =>{
      return(
        <>
          <SwiperSlide   key={j} tag="li"  loop={true}>
            <img
              // key={j}
              src={img}
              style={{ listStyle: 'none' , height:'300px' ,width:'500px' }}
              alt={`Slide`}
            />
          </SwiperSlide>
        </>
 
      );
    }), 
  );
  // }
  

  const thumbs = [];
  // for (let i = 0; i < 5; i += 1) {
  thumbs.push(
    props.post.onePost.images.map((img , j) =>{
      return(
        <>
          <SwiperSlide   key={j} tag="li" loop={true} >
            <img
              // key={j}
              src={img}
              style={{ listStyle: 'none' , height:'100px' ,width:'163px' }}
              alt={`Slide`}
              
            />
          </SwiperSlide>
        </>
 
      );
    }), 
  );
  // const thumbs = [];
  // for (let i = 0; i < 5; i += 1) {
  //   thumbs.push(
  //     <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
  //       <img
  //         src={`https://picsum.photos/id/${i}/163/100`}
  //         alt={`Thumbnail ${i}`}
  //       ></img>
  //     </SwiperSlide>
  //   );
  // }

  const slides2 = [];
  // for (let i = 0; i < 5; i += 1) {
  slides2.push(
    props.post.onePost.images.map((img , j) =>{
      return(
        <>
          <SwiperSlide   key={j} tag="li"  loop={true}>
            <img
              // key={j}
              src={img}
              style={{ listStyle: 'none' , height:'300px' ,width:'500px' }}
              alt={`Slide`}
            />
          </SwiperSlide>
        </>
 
      );
    }), 
  );
  
  // const slides2 = [];
  // for (let i = 9; i < 14; i += 1) {
  //   slides2.push(
  //     <SwiperSlide key={`slide-${i}`} tag="li">
  //       <img
  //         src={`https://picsum.photos/id/${i + 1}/500/300`}
  //         style={{ listStyle: 'none' }}
  //         alt={`Slide ${i}`}
  //       />
  //     </SwiperSlide>
  //   );
  // }
  
  return (
    <React.Fragment>
      <section className="sliderr">
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={1}
          onInit={(swiper) => console.log('Swiper initialized!', swiper)}
          onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
          }}
          onReachEnd={() => console.log('Swiper end reached')}
        >
          {slides}
        </Swiper>
  
        <Swiper
          id="thumbs"
          spaceBetween={5}
          slidesPerView={3}
          onSwiper={setThumbsSwiper}
        >
          {thumbs}
        </Swiper>
  
      </section>
    </React.Fragment>
  );
}
const mapStateToProps = (state) =>{
  return {post : state.post,
    token : state.auth.token,
    rooms : state.rooms.chatRooms ,

  };
} ;

const mapDispatchToProps = (dispatch) => ({
  // getRemoteProduct: (id,token) => dispatch(getRemoteProduct(id,token) ),
  // getRooms:(token) => dispatch(getRooms(token)),
  // addToFav: (id ,token ) => dispatch(addToFav(id ,token)),
  // getPost:(id ,token ) => dispatch(getPost(id ,token)),
});

export default connect(mapStateToProps , mapDispatchToProps )( Slider );

// export default  Slider;