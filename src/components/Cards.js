import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Interesting Deals, you wouldn't want to miss 'em.' </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Amazon Jungle is quite unexplored. You got this opportunity to vist some beautiful places. Including a surprise waterfall visit'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Take your loved ones to a vacation on the Islands of Maldives. Exciting deals ahead.'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Love Cruises ? Perfect time to go for a ride in the Indian Ocean visiting uncharted waters.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Football Fanatic ? Experience It Besides The Theatre Of Dreams (Old Trafford).'
              label='Sports & Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Visit Sahara Desert during the winters. Camel Tour and much more. Special discount for couples.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;