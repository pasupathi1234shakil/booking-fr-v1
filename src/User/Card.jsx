import React from 'react';
import  image1 from './aranmani.jpg';
import image2 from './premalu.jpg';
import image3 from './romeo.jpg'
const Card = () => {
  const cardStyle = {
    width: '18rem'
  };

  return (
    <div className='container'>
    <div className="row">
      <div className="col-4">
    <div className="card" style={cardStyle}>
      <img src={image1} className="card-img-top" style={{ height: '50vh', width: '100%' }}alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Aranmani 4</h5>
        <p className="card-text">2024.Horror/Comedy.2h.25m</p>
        <a href="#" className="btn btn-success">Book Now</a>
      </div>
    </div>
    </div>
    <div className="col-4">
    <div className="card" style={cardStyle}>
    <img src={image2} className="card-img-top" style={{ height: '50vh', width: '100%' }}alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Premalu</h5>
      <p className="card-text">2024.Comedy/Romance.2h 36m</p>
      <a href="#" className="btn btn-success">Book Now</a>
    </div>
  </div>
  </div>
  <div className='col-4'>
  <div className="card" style={cardStyle}>
  <img src={image3} className="card-img-top" style={{ height: '50vh', width: '100%' }}alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Romeo</h5>
    <p className="card-text">Romance/Comedy.2h 30m</p>
    <a href="#" className="btn btn-success">Book Now</a>
  </div>
</div>
</div>
</div>
</div>
  );
};

export default Card;
