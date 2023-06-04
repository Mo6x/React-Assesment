import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
interface Open{
    menu:string,
    handleCloseOpen:()=>void
}
function InsideSeachBar(props:Open) {
    return (
        <>
          <div className='Items'>
          <div className='headNode'>
          <img src={props.menu} alt='' onClick={props.handleCloseOpen} />  
          <h3>Set Parameters</h3>
           <button>Reset all</button>
           
          </div>
          <p style={{paddingLeft:"30px"}}> 9 parameters available</p>
            <div className='form'>
            <div className='form-div-row'>
                <h3>From (node) </h3>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <hr />
                <div className='form-div-row'>
                <input />
                </div>
                <hr />

                <div className='form-div-row'>
                <h3>Recieving (node) </h3>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <hr />

                <div className='form-div-row'>
                <input />
                </div>
                <hr />
                <div className='form-div-row'>
                <h3> Item </h3>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <hr />

                <div className='form-div-row'>
                <input />
                </div>
                <hr />

                <div className='form-div-row'>
                <h3>Warehouse order </h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <hr />
                <div className='form-div-row'>
                <h3>Type </h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <hr />

                <div className='form-div-row'>
                <h3>Category </h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <hr />

                <div className='form-div-row'>
                <h3>Status </h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <hr />

                <div className='form-div-row'>
                <h3>Created on </h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <hr />

                <div className='form-div-row'>
                <h3>Pick date </h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <hr />

                <div className='form-div-row' style={{background:"#f8f8f8",border:"0px"}}>
                <button className='but cancel'>Cancel</button>
                <button className='but aply' >Apply</button>
                </div>
                <hr />
            </div>
       
        </div>
            
        </>
    );
}

export default InsideSeachBar;