import React from 'react';
import Atropos from 'atropos/react';

import { mokContacts, mokImageHome } from '../mokApi';
import { Panel } from '../panel';

import './contacts.css';

interface ContactsApi {
  id: any;
  atropos: any;
  img: string;
  className: string;
}

export const Contacts = () => {
  return (
    <div className="portfolio atropos-banner">
      <Atropos className="atropos-banner">
        {mokImageHome.map((image: ContactsApi) => (
          <img
            className={image.className}
            key={image.id}
            data-atropos-offset={image.atropos}
            src={image.img}
            alt=""
          />
        ))}
        <Panel title="Contacts">
          <div className="contacts__content">
            {mokContacts.map((item) => (
              <div key={item.id} className="contacts__item">
                <img src={item.image} alt="" />
                <a href={item.href}>{item.name}</a>
              </div>
            ))}
          </div>
        </Panel>
      </Atropos>
    </div>
  );
};
