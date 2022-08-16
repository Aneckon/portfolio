import React from 'react';
import Atropos from 'atropos/react';
import { Panel } from '../panel';

import { mokImagePortfolio, mokImagePortfolioContent } from '../mokApi';

import './portfolio.css';

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
            {mokImagePortfolioContent.map((img) => (
              <a href={img.link} target="_blank" key={img.id} className="portfolio__item">
                <img src={img.img} alt="" />
                <div className="portfolio__item-content">
                  <p>
                    <span>Назва:</span> {img.conent?.name}
                  </p>
                  <p>
                    <span>Стек:</span> {img.conent?.steck}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Panel>
      </Atropos>
    </div>
  );
};
