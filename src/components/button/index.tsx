import React, { FC } from 'react';
import './index.css';
import { buttonProps } from '../../interface';

const Button: FC<buttonProps> = ({ src, clickFunction }) => {
  return <img className='button' src={src} onClick={clickFunction} />;
};

export default Button;
