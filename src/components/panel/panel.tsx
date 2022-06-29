import React, { FC } from 'react';

import './panel.css';

interface PanelProps {
  children: any;
  title: string;
}

export const Panel: FC<PanelProps> = ({ children, title }) => {
  return (
    <div className="panel">
      <h2>{title}</h2>
      <div className="panel__skill-content">{children}</div>
    </div>
  );
};
