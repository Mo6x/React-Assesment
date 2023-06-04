import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons'
;
import logo2 from './image/icon/icon2.svg'
import menu from './image/icon/menu.svg'

function Header() {
    return (
        <header>
            <div className='head'>
                <div>
                <span className='text-padding'>Home 
                    <FontAwesomeIcon icon={faAngleRight} className='icon' />
                    </span>
                    <span className='text-padding'>OC 
                    <FontAwesomeIcon icon={faAngleRight} className='icon' />
                    </span>
                    <span className='text-padding'>Item search 
                    <FontAwesomeIcon className='icon' icon={faAngleRight} />
                    </span>
                </div>

            </div>
            <div className='header-bottom'>
            <div className='logoArea'>
                    <h1>Item search</h1>
                    <span>0 Items</span>
                </div>
                <div className='searchArea'>
                    <label>
                        <input type='text' placeholder='Search by item #, Order #' />
                        <FontAwesomeIcon icon={faSearch} className='icons'/>
                    </label>
                    <div className='rotate'>
                       <span>+</span>
                    </div>
                    <img src={logo2} alt={logo2} width={25} />
                    <img src={menu} alt={menu} className='imageBorder' width={35} />
                </div>


            </div>
        </header>
    );
}

export default Header;