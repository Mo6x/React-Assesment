import { faAngleLeft, faAngleRight,faChevronDown,faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import logo2 from './image/icon/icon2.svg'
import menu from './image/icon/menu.svg'
import InsideSeachBar from './InsideSeachBar';

interface Items {
    id: number;
    order: string;
    types: string;
    item: string;
    category: string;
    description: string;
  }
  
  interface ItemsTableProps {
    items: Items[
        
    ];
    menu:string

  }

  const list = [
    {
    "id": 1,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 2,
    "order": "823990020022",
    "types": "EDF",
    "item": "980328714",
    "category": "13-Electronices",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 3,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 4,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 5,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 6,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 7,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 8,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 9,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 10,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 11,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 12,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 13,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 14,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 15,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 16,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 17,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 18,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 19,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 20,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  }
];


  function DatasCall( props : ItemsTableProps) {

   const [items, setItems] = useState<Items[]>([]);
    
    useEffect(() => {
      fetch("db")
        .then((response) => response.json())
        .then((data) => setItems(data));
    }, []);

    const [changeS,setChangeS] = useState(Boolean)

    let x=0
    const handleCloseOpen = ()=>{
        x++
        if(x==1)
        setChangeS(true)
    if(x==2){
      setChangeS(false)
        x=1
    }
  }
    return (
        <>
          {(changeS) ?   <InsideSeachBar menu={props.menu} handleCloseOpen={handleCloseOpen}/>:""}
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
                    <img src={menu} alt={menu} onClick={handleCloseOpen} className='imageBorder' width={35} />
                </div>
        </div>
      <table>
        <thead>
          <tr>
          <th >
             <div className='tableList'>
                   
                    <Link className=" tLink" to={''} style={{textDecoration:"none"}}><FontAwesomeIcon icon={faChevronDown}  /></Link>
                </div>
               
            </th>
            <th >
             <div className='tableList'>
                    <span>Order #</span>
                   
                    <Link className=" tLink" to={''} style={{textDecoration:"none"}}>Showing all &nbsp; &nbsp;<FontAwesomeIcon icon={faChevronDown}  /></Link>
                </div>
               
            </th>
            <th >
            <div className='tableList'>
                    <span>Type</span>
                 
                    <Link className=" tLink" to={''} style={{textDecoration:"none"}}>Showing all &nbsp; &nbsp;<FontAwesomeIcon icon={faChevronDown}  /></Link>
                </div>
              
            </th>
            <th >
            <div className='tableList'>
                    <span>Item</span>
                 
                    <Link className=" tLink" to={''} style={{textDecoration:"none"}}>Showing all &nbsp; &nbsp;<FontAwesomeIcon icon={faChevronDown}  /></Link>
                </div>
               
            </th>
          
            <th >
            <div className='tableList'>
                    <span>Category</span>
           
                    <Link className=" tLink" to={''} style={{textDecoration:"none"}}>Showing all &nbsp; &nbsp;<FontAwesomeIcon icon={faChevronDown}  /></Link>
                </div>
             
            </th>
            <th >
                <div className='tableList'>
                    <span>Description</span>
                  
                   <Link className=" tLink" to={''} style={{textDecoration:"none"}}>Showing all &nbsp; &nbsp;<FontAwesomeIcon icon={faChevronDown}  /></Link>
                </div>
               
            </th>
          </tr>
        </thead>

        <tbody>
          {list.map((items) => (
            <tr key={items.id}>
                   <th><div className='tableList'>
                    <span>{items.id}</span>           
                </div>
                </th>
                <th><div className='tableList'>
                    <span>{items.item}</span>           
                </div>
                </th>
                <th><div className='tableList'>
                    <span>{items.item}</span>           
                </div>
                </th>
                <th><div className='tableList'>
                    <span>{items.description}</span>           
                </div>
                </th>
                <th><div className='tableList'>
                    <span>{items.category}</span>           
                </div>
                </th>
                <th><div className='tableList'>
                    <span>{items.order}</span>           
                </div>
                </th>
             </tr>
            ))}
        </tbody>
      </table>
      </>
    )
  }
  
  export default DatasCall;