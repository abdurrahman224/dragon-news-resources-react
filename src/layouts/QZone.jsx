import React from 'react';
import palyground from '../../src/assets/playground.png'
import classImg from '../../src/assets/class.png'
import bgImg from '../../src/assets/bg.png'

const QZone = () => {
  return (
    <div>
      <h2 className="text-gray-200 text-2xl py-8"> Q-zeon</h2>
      <div className=" flex flex-col gap-4">
        <img className="object-cover" src={palyground} alt="palyground" />
        <img className="object-cover" src={classImg} alt="classImg" />
        <img className="object-cover" src={bgImg} alt="bgImg" />
      </div>
    </div>
  );
};

export default QZone;