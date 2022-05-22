import React from 'react';
import Blog from '../blog.png';
import {connect} from 'react-redux';
import { Link} from "react-router-dom";
// import Post from './Post'
import '../style.css';




class Home extends React.Component {



  render () {
    const {posts} = this.props;
    // console.log(this.props.posts);
    return (
      <div>
        <h1>Home</h1>

        <div className="container">
        {
          posts !== {} ?
          posts.map(item => {


            return (
              <div key={item.id} className="post" >
                <Link to={`/post_id/${item.id}`}><h4>{item.title}</h4></Link>
                <p>{item.body}</p>
                <img src={Blog} alt='blog'/>
              </div>
            )

          })



          : console.log('No post to show')
        }
        </div>
      </div>

    )
  }
} // end of class






const mapStateToProps = (state) => {
  // console.log(state.posts);
  return {
    posts: state.posts
  }
}
// <Link to={item.id}></Link>

export default connect(mapStateToProps,null)(Home);
