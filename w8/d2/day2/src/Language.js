

const Language = (props) => {

  const {one} = props;
  const {name,votes} = one;

  return (
    <div>
    <p>{votes}</p>
    <p>{name}</p>
    <p onClick={props.clickme}>Click Here</p>
    <br />
    </div>
  )
}


export default Language;
