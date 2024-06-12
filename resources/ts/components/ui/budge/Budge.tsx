import React, { FC } from 'react';
import { BudgeType } from './_type';
import { budgeTv } from './_function';

const Budge: FC<BudgeType> = ({color, value}) => {
  return (
    <div className={budgeTv({color: color})}>
      {value}
    </div>
  );
};

export default Budge;
