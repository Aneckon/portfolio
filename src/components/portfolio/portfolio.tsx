import React from 'react';
import Atropos from 'atropos/react';

import { mokImagePortfolio } from '../mokApi';

import './portfolio.css';
import { Panel } from '../panel';

interface PortfolioApi {
  id: any;
  atropos: any;
  img: string;
  className: string;
}

export const Portfolio = () => {
  return (
    <div className="portfolio atropos-banner">
      <Atropos className="atropos-banner">
        {mokImagePortfolio.map((image: PortfolioApi) => (
          <img
            className={image.className}
            key={image.id}
            data-atropos-offset={image.atropos}
            src={image.img}
            alt=""
          />
        ))}
        <Panel title="Portfolio">
          <div className="portfolio__content">
            <div className="portfolio__item"></div>
            <div className="portfolio__item"></div>
            <div className="portfolio__item"></div>
            <div className="portfolio__item"></div>
          </div>
        </Panel>
      </Atropos>
    </div>
  );
};
