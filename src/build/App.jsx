import { useState } from 'react';
import "./style.css";
import star from '../images/icon-star.svg';
import colton from '../images/image-colton.jpg';
import irene from '../images/image-irene.jpg';
import anne from '../images/image-anne.jpg';

function App() {


  return (
    <>
        <header className="header">
            <div className="header--center">
                <h1 className="header__title">10,000+ of our users love our products.</h1>
                <p className="header__info">We only provide great products combined with excellent customer service.
                    See what our satisfied customers are saying about our services.</p>

                <div className="header__reviews">
                    <h3 className="reviews__reviews"><img src={star} alt="" className="reviews__image"/><img src={star} alt="" className="reviews__image"/><img src={star} alt=""
                        className="reviews__image"/><img src={star} alt="" className="reviews__image"/><img src={star} alt="" className="reviews__image"/> Rated 5 Stars in Reviews</h3>
                    <h3 className="reviews__guru"><img src={star} alt="" className="guru__image"/><img src={star} alt="" className="guru__image"/><img src={star} alt=""
                        className="guru__image"/><img src={star} alt="" className="guru__image"/><img src={star} alt="" className="guru__image"/> Rated 5 Stars in Report Guru</h3>
                    <h3 className="reviews__tech"><img src={star} alt="" className="tech__image"/><img src={star} alt="" className="tech__image"/><img src={star} alt=""
                        className="tech__image"/><img src={star} alt="" className="tech__image"/><img src={star} alt="" className="tech__image"/> Rated 5 Stars in BestTech</h3>
                </div>

            </div>
        </header>

        <main className="main">

            <div className="main__colton">
                <img src={colton} alt="" className="colton__image"/>
                <h3 className="colton__title">Colton Smith</h3>
                <h3 className="colton__subtitle">Verified Buyer</h3>
                <p className="colton__info">" We needed the same printed design as the one we had ordered a week prior.
                    Not only did they find the original order, but we also received it in time.
                    Excellent!"</p>
            </div>

            <div className="main__irene">
                <img src={irene} alt="" className="irene__image"/>
                <h3 className="irene__title">Irene Roberts</h3>
                <h3 className="irene__subtitle">Verified Buyer</h3>
                <p className="irene__info">"Customer service is always excellent and very quick turn around. Completely
                    delighted with the simplicity of the purchase and the speed of delivery."</p>
            </div>

            <div className="main__anne">
                <img src={anne} alt="" className="anne__image"/>
                <h3 className="anne__title">Anne Wallace</h3>
                <h3 className="anne__subtitle">Verified Buyer</h3>
                <p className="anne__info">"Put an order with this company and can only praise them for the very high
                    standard. Will definitely use them again and recommend them to everyone!"</p>
            </div>

        </main>
    </>
  )
}

export default App


/*
















 */