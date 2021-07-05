import React from 'react'
import truncate from '../../utils/truncate';
import './card.css'

const Card = ({ strMealThumb, strMeal, description, ratings, price}) => {
    return (
      <div className='container-fluid shadow my-5 px-0 card-container'>
        <div className='card-image'>
          <img src={strMealThumb} alt='banner' className='card-banner' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-10'>
              <h5 className='font-weight-bold'>{ strMeal }</h5>
            </div>
            <div className='col-2'>
              <h5>{ price }</h5>
            </div>
          </div>
          <div>
            <p>Served with french fried + drink</p>
          </div>
          <div>
            <p className='card-description'>{ truncate(description) }</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-8'>
            <ul className='d-flex list-unstyled my-4 mx-5'>
              {(new Array(ratings).fill(0)).map((item, index) => (
                <li className='card-star' key={index}>
                  <i className='ri-star-fill ri-1x card-star-color'></i>
                </li>
              ))}
              {(new Array(5 - ratings).fill(0)).map((item, index) => (
                <li className='card-star' key={index}>
                  <i className='ri-star-line ri-1x card-star-color'></i>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-4 d-flex card-plus-button'>
            <i className='ri-add-fill ri-4x'></i>
          </div>
        </div>
      </div>
    );
};

export default Card
