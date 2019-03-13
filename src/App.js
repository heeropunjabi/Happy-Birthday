import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<div>
      <div className="loading" />
      <audio className="song" controls loop>
        <source src="hbd.mp3" />
        Your browser isn't invited for super fun audio time.
        </audio>
      <div className="balloons text-center" id="b1">
        <h2 style={{ color: '#F2B300' }}>A</h2>
      </div>
      <div className="balloons text-center" id="b2">
        <h2 style={{ color: '#0719D4' }}>N</h2>
      </div>
      <div className="balloons text-center" id="b3">
        <h2 style={{ color: '#D14D39' }}>K</h2>
      </div>
      <div className="balloons text-center" id="b4">
        <h2 style={{ color: '#8FAD00' }}>I</h2>
      </div>
      <div className="balloons text-center" id="b5">
        <h2 style={{ color: '#8377E4' }}>T</h2>
      </div>
      <div className="balloons text-center" id="b6">
        <h2 style={{ color: '#99C96A' }}>A</h2>
      </div>
      <img src="Balloon-Border.png" width="100%" className="balloon-border" />
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-xs-2 bulb-holder">
            <div className="bulb" id="bulb_yellow" />
          </div>
          <div className="col-md-2 col-xs-2 bulb-holder">
            <div className="bulb" id="bulb_red" />
          </div>
          <div className="col-md-2 col-xs-2 bulb-holder">
            <div className="bulb" id="bulb_blue" />
          </div>
          <div className="col-md-2 col-xs-2 bulb-holder">
            <div className="bulb" id="bulb_green" />
          </div>
          <div className="col-md-2 col-xs-2 bulb-holder">
            <div className="bulb" id="bulb_pink" />
          </div>
          <div className="col-md-2 col-xs-2 bulb-holder">
            <div className="bulb" id="bulb_orange" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <img src="banner.png" className="bannar" />
          </div>
        </div>
        {/* <div class="row message">
			<div class="col-md-12"><p>Khushbu</p></div>
		</div> */}
        <div className="row cake-cover">
          <div className="col-md-12 texr-center">
            <div className="cake">
              <div className="velas">
                <div className="fuego" />
                <div className="fuego" />
                <div className="fuego" />
                <div className="fuego" />
                <div className="fuego" />
              </div>
              <div className="cobertura" />
              <div className="bizcocho" />
            </div>
          </div>
        </div>
        <div className="row message">
          <div className="col-md-12">
            <p>Aru, Today is...as beautiful as other days</p>
            <p>but you realize another year has gone in a blink of the eyes</p>
            <p><strong>however</strong></p>
            <p>Do you know..? today is just special</p>
            <p>so special to you that's why</p>
            <p>Let's make it...</p>
            <p>the best celebration ever</p>
            <p>and let me share...</p>
            <p>a piece of happiness to you</p>
            <p>I made all this...as a birthday present to you</p>
            <p>thanks for being there...thanks for the friendship we made</p>
            <p>thanks for everything</p>
            <p>May your life be at ease. May all your wishes come true</p>
            <p>Remember</p>
            <p>your ambitions</p>
            <p>you live as a free bird...</p>
            <p>flying in the blue sky</p>
            <p>Now things are different...</p>
            <p>real story of your life</p>
            <p>is just about to begin</p>
            <p>indeed..</p>
            <p>this life is not easy as we thought</p>
            <p>but...don't worry...don't be afraid</p>
            <p>because...</p>
            <p>you are not alone in this world</p>
            <p>because...</p>
            <p>this year will be better</p>
            <p>and I hope</p>
            <p>you'll find...</p>
            <p>happiness along the way</p>
            <p>keep your spirits up</p>
            <p>enjoy every single moment...</p>
            <p>that you experiecne today, fill it with your most beautiful smile</p>
            <p>and make it the best memory..</p>
            <p>lastly...</p>
            <p>I'd like to wish you one more time</p>
            <p>a very happy birthday</p>
          </div>
        </div>
        <div className="navbar navbar-fixed-bottom">
          <div className="row">
            <div className="col-md-6 text-center col-md-offset-3">
              <button className="btn btn-primary" id="turn_on">Turn On Lights</button>
              <button className="btn btn-primary" id="play">Play Music</button>
              <button className="btn btn-primary" id="bannar_coming">Let's Decorate</button>
              <button className="btn btn-primary" id="balloons_flying">Fly With Balloons</button>
              <button className="btn btn-primary" id="cake_fadein">Most Delicious Cake Ever</button>
              <button className="btn btn-primary" id="light_candle"> Light Candle</button>
              <button className="btn btn-primary" id="wish_message">Happy Birthday</button>
              <button className="btn btn-primary" id="story">A mesage for you</button>
              {/* <button class="btn btn-primary" id="cake_cut">Lrt's Cut the Cake</button> */}
            </div>
          </div>
          {/* <div class="col-md-2">
			</div>
			<div class="col-md-2">
			</div>
			<div class="col-md-2">
			</div>
			<div class="col-md-2">
			</div>
			<div class="col-md-2">
			</div> */}
        </div>
      </div>
    </div>
    );
  }
}

export default App;
