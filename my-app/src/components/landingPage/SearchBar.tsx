import React from 'react'
import { useState } from 'react';
import Menu from "../landingPage/image/icon/menu.svg";
import DatasCall from './DatasCall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';





 const SearchBar = (props:any) => {
  
    const [item, setItems] = useState(0);
    const [order, setOrder] = useState(0);
    const [type, setQuantity] = useState(0);
    const [category, setCategory] = useState("");
    const [id, setId] = useState(0);
    const [description, setDescription] = useState("");

    const tems = [
        item,order,type,category,id,description
    ]
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };
  
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(Number(event.target.value));
    };
  
    const handleAddItem = () => {
    //   const newItem: Items = {
    //     id: items.length + 1,
    //     category,
    //   };
  
    //   setItems([...items, newItem]);

    //   setQuantity(0);
    alert(1)
    };




    
    return (   

        <>
           
        <DatasCall items={[]} />
        <div className='Items'>
          <div className='headNode'>
          <img src={Menu} alt='' />  
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
export default SearchBar;