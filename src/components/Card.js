

function Card(props) {
  
  const data = props.data;
    return (
      <div className="card border-0 m-4 shadow">
        <img src={data.imageUrl} alt={data.name} className="card-img-top" />
        <div><button className="btn border border-dark mb-2">{data.number}</button></div>
      
        <div className="card-body">
          <div className="card-title"><h3>{data.name}</h3></div>
          <div className="card-text">{data.description}</div>
          
          <div>
          <i class="bi bi-telephone me-2"></i>
            {data.phone}</div>
          <div><i class="bi bi-geo me-2"></i>{data.address}</div>

          <a href={data.link}>
          <button type="button" className="w-20 btn btn-lg btn-primary" >Visit Website</button>
          </a>
         
          
        </div>
      </div>
    );
  }
  export default Card;