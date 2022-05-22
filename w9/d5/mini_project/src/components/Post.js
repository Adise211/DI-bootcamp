
import {connect} from 'react-redux';
import { useParams, useLocation } from "react-router-dom";
import {useEffect, useState} from 'react';
import {deletePost} from '../redux/actions';
import Blog from '../blog.png';
import '../style.css';


const Post = (props) => {
  const [post, setPost] = useState(null);




    let {id} = useParams();
    let location = useLocation();
    // console.log(location);
    const {posts} = props;
    // console.log(posts);
    useEffect(() => {
      const p = posts.find(item => item.id === id);
      setPost(p);


    },[])


    const handleClick = (id) => {
      props.deletePost(id)
      // console.log('delete');


      if (id !== props.posts.id) {
         // location.href = 'http://localhost:3000/'
         window.history.back()
        } else {
          console.log('You are still here');
        }


    }


    return (
      <div>
        {

          post ?
          <div key={post.id} className="post" >
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <img src={Blog} alt='blog'/>
            <button onClick={() => handleClick(post.id)} className='delete-btn'>Delete post</button>
          </div>
          : null
        }


      </div>
    )





}// end of class

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);
