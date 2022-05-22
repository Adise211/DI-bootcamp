import { LINK_POST, DELETE_POST } from './actions';

const initState = {
  posts: [
      {id: '1', title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '2', title: 'Dolorem eum magni eos aperiam quia', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
      {id: '3', title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
  ]


}



export const reducer = (state=initState, action={}) => {
  // console.log(state.posts);
  switch (action.type) {
    case LINK_POST:
      return {...state}

    case DELETE_POST:
      const new_arr = state.posts.filter(item => {
        return item.id !== action.payload
      })
      return {...state, posts:new_arr}

    default:
      return {...state}

  }


}






// export const reducer = (state=initState, action={}) => {
//   switch (action.type) {
//     case 'DISPALY_ALL':
//       return {...state}
//     case 'DECREMENT':
//       return {...state, count:state.count - 1}
//     default:
//       return {...state}
//
//   }
// }
