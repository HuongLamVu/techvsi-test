import React from 'react';
import './style.scss';

import Image0 from '../../assets/images/np_matex-216x300.png';
import Image1 from '../../assets/images/np_vinilex500-216x300.png';
import Image2 from '../../assets/images/np_matex-216x300 (1).png';

const Landing: React.FC = () => {
    return (
        <div>
            <div className="list">
                <div className="item">
                    <div className="heading red">
                        <img src={Image0} alt="" />
                        <div className="content">
                            <h2>NORMAL</h2>
                            <span className='price'>$500</span>
                            <span className='status'>STARTING</span>
                        </div>                  
                    </div>
                    <div className="body">
                        <ul>
                            <li>2 Room - $500</li>
                            <li>3 Room - $600</li>
                            <li>4 Room - $700</li>
                        </ul>
                        <ul>
                            <li>5 Room - $850</li>
                            <li>EA/3 Gen - $1000</li>
                            <li>Masionette - $1250</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <button className='btn btn-primary'>Enquire now</button>
                    </div>
                </div>
                <div className="item active">
                    <div className="heading yellow">
                        <img src={Image1} alt="" />
                        <div className="content text-black">
                            <h2>STANDARD</h2>
                            <span className='price'>$600</span>
                            <span className='status'>STARTING</span>
                        </div>
                    </div>
                    <div className="body">
                        <ul>
                            <li>2 Room - $600</li>
                            <li>3 Room - $800</li>
                            <li>4 Room - $900</li>
                        </ul>
                        <ul>
                            <li>5 Room - $1100</li>
                            <li>EA/3 Gen - $1250</li>
                            <li>Masionette - $16500</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <button className='btn btn-primary'>Enquire now</button>
                    </div>

                </div>
                <div className="item">
                    <div className="heading green">
                        <img src={Image2} alt="" />
                        <div className="content">
                            <h2>SUPREME</h2>
                            <span className='price'>$700</span>
                            <span className='status'>STARTING</span>
                        </div>
                    </div>
                    <div className="body">
                        <ul>
                            <li>2 Room - $700</li>
                            <li>3 Room - $1000</li>
                            <li>4 Room - $1100</li>
                        </ul>
                        <ul>
                            <li>5 Room - $1350</li>
                            <li>EA/3 Gen - $1500</li>
                            <li>Masionette - $2050</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <button className='btn btn-primary'>Enquire now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Landing;
