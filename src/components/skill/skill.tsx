import React from 'react';
import Atropos from 'atropos/react';

import { Panel } from '..';
import { mokImageSkill, mokSkill, mokSkillTwo } from '../mokApi';

import './skill.css';

interface SkillApi {
  id: any;
  atropos: any;
  img: string;
  className: string;
}

export const Skill = () => {
  return (
    <div className="skill atropos-banner">
      <Atropos className="atropos-banner">
        {mokImageSkill.map((image: SkillApi) => (
          <img
            className={image.className}
            key={image.id}
            data-atropos-offset={image.atropos}
            src={image.img}
            alt=""
          />
        ))}
        <Panel title="Skill">
          <div className="panel__skill-content__left">
            {mokSkill.map((item) => (
              <div key={item.id} className="panel__skill-item">
                <p>{item.name}</p>
                <div className="panel__skill-content__item">
                  <div className={`skills ${item.name}`}>{item.interest}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="panel__skill-content__right">
            {mokSkillTwo.map((item) => (
              <div key={item.id} className="panel__skill-item">
                <div className="panel__skill-content__image">
                  <img src={item.image} alt="" />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </Panel>
      </Atropos>
    </div>
  );
};
