import '../App.css';


function Item(props: any) {
  return (
    <a className="box" href={ props.url } target = '_blank' rel="noopener noreferrer">
        <img src={ props.images[0].url} width = '20' height='20' style={{marginRight : 20}} alt='helo'/>
        <div>{props.name}</div>
    </a>
    // <div className="box" onClick={getAlbumDetails}>
    //   <img src={props.images[0].url} width='20' height='20' style={{ marginRight: 20 }} alt='helo' />
    //   <div>{props.name}</div>
    // </div>
  );
}

export default Item;
