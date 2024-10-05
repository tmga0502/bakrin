import React, { FC } from 'react';
import { BudgeType } from './Budge.type';
import { BudgeStyles } from './Budge.styles';


const Budge: FC<BudgeType> = ({color, value}) => {
  return (
    <div css={BudgeStyles({color: color})}>
      {value}
    </div>
  );
};

export default Budge;
