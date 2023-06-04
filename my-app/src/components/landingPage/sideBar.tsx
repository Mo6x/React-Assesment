import React from 'react';
import iconDiv from './image/icon/sideicon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faGear, faSignOut, faUserAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
    const arr = [
        1,2,3,4,5,6,7
    ]
    return (
        <aside>
            <div className='aside'>
                <div className='aside-div'>
                <div className='rotate'>
                       <span>+</span>
                    </div>
                    <div className='divOc'>
                    <span className='oc'>
                        OC 
                    </span>
                    <br />
                        <span className='order'>Order Control</span>


                    </div>

  


                </div>
                <div className='item-search mainbg'>
                    <img src={iconDiv} alt='' className='iconsidebar' />
                    Item search
                    </div>
                    {arr.map((val,index)=>{
                        return (
                            <div className='item-search '>
                            <img src={iconDiv} alt='' className='iconsidebar' />
                            Item search
                            </div>
                        )
                    })}

<div className='item-search ' style={{marginTop:"300px"}}>
                           
                    <FontAwesomeIcon icon={faChevronCircleLeft} className='iconsidebar' />
                            Item search
                            </div>
                            <div className='item-search '>
                            <FontAwesomeIcon icon={faUserAlt} className='iconsidebar' />
                            Jwsven<br />
                            ffdfff
                            </div>
                            <div className='item-search '>
                            <FontAwesomeIcon icon={faGear} className='iconsidebar' />
                            Help
                            </div>
                            <div className='item-search '>
                            <FontAwesomeIcon icon={faSignOut} className='iconsidebar' />
                            Sign Out
                            </div>
                           
                   
            </div>
            
        </aside>
    );
}

export default Sidebar;