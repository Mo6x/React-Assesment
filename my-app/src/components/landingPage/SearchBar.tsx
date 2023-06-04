import React from 'react'
import { useState } from 'react';
import Menu from "../landingPage/image/icon/menu.svg";
import DatasCall from './DatasCall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import InsideSeachBar from './InsideSeachBar';

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
    const [change,setChange] = useState(Boolean)
    const [changeVal,setchangeVal] = useState(Boolean)
let x=0
const handleCloseOpen = ()=>{
    x++
    if(x==1)
        setChange(true)
if(x==2){
    setChange(false)
    x=0
}
}

    
    return (   

        <>
        <DatasCall items={[]} menu={Menu} />
        {(change) ? "" :    <InsideSeachBar menu={Menu} handleCloseOpen={handleCloseOpen}/>}
        </>

      );
}
export default SearchBar;