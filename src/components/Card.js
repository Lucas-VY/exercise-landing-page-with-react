export const Card = ({ text }) => {
  return (
    <div className="col-xs-12 col-sm-3 col-md-3">
      <div className="card">
        <img alt="Card image cap" className="card-img-top" src="https://picsum.photos/400/400?random=1" />
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a className="btn btn-primary" href="#">
            Go somewhere
			    </a>
        </div>
      </div>
    </div>
  )
}

