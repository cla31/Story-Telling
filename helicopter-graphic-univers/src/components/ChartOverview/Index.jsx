import React from 'react';
import './style.css'; 

const TableOverview = () => {
  return (
    <div className="container">
    <table className="pearent-table">
      <tbody>
        <tr>
          <td style={{ width: '100px', height: '100px' }}>
            <svg className="item4-diagonal">
              <line x1="0" y1="50%" x2="100%" y2="50%"></line>
            </svg>
            <ul className="ch-grid">
              <li>
                <div className="ch-item ch-img-4">
                  <div className="ch-info-wrap">
                    <div className="ch-info">
                      <div className="ch-info-front ch-img-1">Contrat</div>
                      <div className="ch-info-back">
                        <h3>Deepview</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </td>
          <td style={{ width: '100px', height: '100px' }}>
                    <svg className="item3-diagonal">
                    <line x1="0" y1="50%" x2="100%" y2="50%"></line>
               </svg>
                    <ul className="ch-grid">
                        <li>
                            <div className="ch-item ch-img-3">
                                <div className="ch-info-wrap">
                                    <div className="ch-info">
                                        <div className="ch-info-front ch-img-1">Delivery</div>
                                        <div className="ch-info-back">
                                            <h3>Deepview</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </td>
                <td style={{ width: '100px', height: '100px' }}>
                    <svg className="item2-diagonal">
                    <line x1="0" y1="50%" x2="100%" y2="50%"></line>
               </svg>
                    <ul className="ch-grid">
                        <li>
                            <div className="ch-item ch-img-2">
                                <div className="ch-info-wrap">
                                    <div className="ch-info">
                                        <div className="ch-info-front ch-img-1">In Service</div>
                                        <div className="ch-info-back">
                                            <h3>Deepview</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </td>
                <td style={{ width: '100px', height: '100px' }}>
                    <svg className="item1-diagonal">
                  <line x1="0" y1="50%" x2="100%" y2="50%"></line>
             </svg>
                    <ul className="ch-grid">
                        <li>
                            <div className="ch-item ch-img-1">
                                <div className="ch-info-wrap">
                                    <div className="ch-info">
                                        <div className="ch-info-front ch-img-1">End of life</div>
                                        <div className="ch-info-back">
                                            <h3>Deepview</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </td>          
            </tr>
        </tbody>
      </table>
  </div>
    );
  };

export default TableOverview;
