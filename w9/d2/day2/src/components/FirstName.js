
const FirstName = (props) => {
  return (
    <>
      First Name:<input type='text' name='fname' onChange={props.handleChange}/>
    </>
  )
}
export default FirstName;
