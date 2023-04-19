import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

import './DeliveryInfo.css'

const DeliveryInfo = () => {
  return (
    <div className='section delivery-info'>
        <div className='container'>
            <div className='grid-container'>
                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                            order with <span>NAVZonline</span>
                        </h3>
                    </div>

                    <p>You can power your strength by ordering with NAVZs online. Dont get stack any frustrated by hunger, NAVZs is always there for you.</p>
                </div>

                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                           additional <span>information</span>
                        </h3>
                    </div>

                    <p>NAVZs provides services for customers in need of maintainning their health in good condition by providing the suitable and convinient meals</p>
                </div>
            </div>
            <div className='grid-container'>
                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                            order with <span>NAVZonline</span>
                        </h3>
                    </div>

                    <p>You can power your strength by ordering with NAVZs online. Dont get stack any frustrated by hunger, NAVZs is always there for you.</p>
                </div>

                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                           additional <span>information</span>
                        </h3>
                    </div>

                    <p>NAVZs provides services for customers in need of maintainning their health in good condition by providing the suitable and convinient meals</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryInfo