import React from 'react';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';

import './style.scss';

import Image0 from '../../assets/images/np_matex-216x300.png';
import Image1 from '../../assets/images/np_vinilex500-216x300.png';
import Image2 from '../../assets/images/np_matex-216x300 (1).png';

const Landing: React.FC = () => {
    return (
        <div>
            <div className="list">
                <div className="item red">
                    <div className="item__heading">
                        <div className="item__img item__img--boxshadow-red">
                            <img src={Image0} alt="" />
                        </div>
                        <div className="item__content">
                            <h2>NORMAL</h2>
                            <span className='item__price'>$500</span>
                            <span className='item__status'>STARTING</span>
                        </div>
                    </div>
                    <div className="item__body">
                        <div className="item__description">
                            <EqualHeight>
                                <ul>
                                    <li><EqualHeightElement name='Description'>2 Room - $500</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>3 Room - $600</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>4 Room - $700</EqualHeightElement></li>
                                </ul>
                                <ul>
                                    <li><EqualHeightElement name='Description'>5 Room - $850</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>EA/3 Gen - $1000</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>Masionette - $1250</EqualHeightElement></li>
                                </ul>
                            </EqualHeight>
                        </div>
                        <div className="item__btn">
                            <button className='btn btn-primary'>Enquire now</button>
                        </div>
                    </div>
                </div>
                <div className="item active yellow">
                    <div className="item__heading">
                        <div className="item__img item__img--boxshadow-yellow">
                            <img src={Image1} alt="" />
                        </div>
                        <div className="item__content text-black">
                            <h2>STANDARD</h2>
                            <span className='item__price'>$600</span>
                            <span className='item__status'>STARTING</span>
                        </div>
                    </div>
                    <div className="item__body">
                        <div className="item__description">
                            <EqualHeight>

                                <ul>
                                    <li><EqualHeightElement name='Description'>2 Room - $600</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>3 Room - $800</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>4 Room - $900</EqualHeightElement></li>
                                </ul>
                                <ul>
                                    <li><EqualHeightElement name='Description'>5 Room - $1100</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>EA/3 Gen - $1250</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>Masionette - $16500</EqualHeightElement></li>
                                </ul>
                            </EqualHeight>
                        </div>
                        <div className="item__btn">
                            <button className='btn btn-primary'>Enquire now</button>
                        </div>
                    </div>

                </div>
                <div className="item green">
                    <div className="item__heading">
                        <div className="item__img  item__img--boxshadow-green">
                            <img src={Image2} alt="" />
                        </div>
                        <div className="item__content">
                            <h2>SUPREME</h2>
                            <span className='item__price'>$700</span>
                            <span className='item__status'>STARTING</span>
                        </div>
                    </div>
                    <div className="item__body">
                        <div className="item__description">
                            <EqualHeight>

                                <ul>
                                    <li><EqualHeightElement name='Description'>2 Room - $700</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>3 Room - $1000</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>4 Room - $1100</EqualHeightElement></li>
                                </ul>
                                <ul>
                                    <li><EqualHeightElement name='Description'>5 Room - $1350</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>EA/3 Gen - $1500</EqualHeightElement></li>
                                    <li><EqualHeightElement name='Description'>Masionette - $2050</EqualHeightElement></li>
                                </ul>
                            </EqualHeight>
                        </div>
                        <div className="item__btn">
                            <button className='btn btn-primary'>Enquire now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Landing;
