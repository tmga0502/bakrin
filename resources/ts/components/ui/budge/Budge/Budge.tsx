import React, { FC } from 'react';
import { BudgeType } from './Budge.type';
import { budgeTv } from './Budge.tv';

const Budge: FC<BudgeType> = ({color, value}) => {
  return (
    <div className={budgeTv({color: color})}>
      {value}
    </div>
  );
};

export default Budge;
