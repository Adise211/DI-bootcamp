export const LINK_POST = 'LINK_POST';
export const DELETE_POST = 'DELETE_POST';

export const linkToPost = (data) => {
  return {
    type:LINK_POST,
    payload:data
  }
}


export const deletePost = (id) => {
  return {
    type:DELETE_POST,
    payload:id
  }
}
