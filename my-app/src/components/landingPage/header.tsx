import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';




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
        
        </header>
    );
}

export default Header;