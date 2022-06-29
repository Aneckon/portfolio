import React from 'react';
import Atropos from 'atropos/react';

import { mokImageHome } from '../mokApi';

import './home.css';

import Logo from '../images/logo.png';
import fon from '../images/atropos-bg.svg';
import arrowDown from '../images/down-arrow.svg';

interface HomeApi {
  id: any;
  atropos: any;
  img: string;
  className: string;
}

export const Home = () => {
  return (
    <Atropos className="atropos-banner">
      <img className="atropos-banner-spacer" src={fon} alt="" />
      {mokImageHome.map((image: HomeApi) => (
        <img className={image.className} key={image.id} data-atropos-offset={image.atropos} src={image.img} alt="" />
      ))}
      <div className="atropos-banner-text">
        <img src={Logo} alt="" />
        <h1 data-atropos-offset="5">Ковальчук Андрій</h1>
      </div>
      <div className="atropos-banner-array">
        <img src={arrowDown} alt="" />
      </div>
    </Atropos>
  );
};
