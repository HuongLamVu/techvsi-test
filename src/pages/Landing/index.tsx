import React from 'react';
import './style.scss';

import Image0 from '../../assets/images/np_vinilex500-216x300.png';
import Image1 from '../../assets/images/np_vinilex500-216x300.png';
import Image2 from '../../assets/images/np_matex-216x300 (1).png';

const Landing: React.FC = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <div className="list">
                <div className="item">
                    <div className="heading red">
                        <img src={Image0} alt="" />
                        <div className="content">
                            <h2>Heading</h2>
                            <span className='price'>$5000</span>
                            <span className='status'>STARTING</span>
                        </div>                  
                    </div>
                    <div className="body">
                        <ul>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                        </ul>
                        <ul>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <button className='btn btn-primary'>Equire now</button>
                    </div>
                </div>
                <div className="item">
                    <div className="heading yellow">
                        <img src={Image1} alt="" />
                        <div className="content text-black">
                            <h2>Heading</h2>
                            <span className='price'>$5000</span>
                            <span className='status'>STARTING</span>
                        </div>
                    </div>
                    <div className="body">
                        <ul>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                        </ul>
                        <ul>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <button className='btn btn-primary'>Equire now</button>
                    </div>

                </div>
                <div className="item">
                    <div className="heading green">
                        <img src={Image2} alt="" />
                        <div className="content">
                            <h2>Heading</h2>
                            <span className='price'>$5000</span>
                            <span className='status'>STARTING</span>
                        </div>
                    </div>
                    <div className="body">
                        <ul>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                        </ul>
                        <ul>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                            <li>2 room - $500</li>
                        </ul>
                    </div>
                    <div className="footer">
                        <button className='btn btn-primary'>Equire now</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Landing;
