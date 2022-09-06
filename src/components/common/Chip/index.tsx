import React from 'react';
import './style.css';

interface IChip {
    label: string
}

const Chip = ({ label }: IChip) => <p className='chip'>{label}</p>;

export default Chip;