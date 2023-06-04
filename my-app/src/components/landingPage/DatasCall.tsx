import { faAngleLeft, faAngleRight,faChevronDown,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";





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
    "id": 3,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
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
    "id": 3,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
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
    "id": 3,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
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
    "id": 3,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
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
    "id": 3,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
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
    "id": 3,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
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
    "id": 3,
    "order": "122100200221",
    "types": "CAD",
    "item": "980328714",
    "category": "12-Bweweages",
    "description": "Ninja Food 10-in-1, 8 Quart"
  },
  {
    "id": 3,
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


    return (
        <>
      <table>
        <thead>
          <tr>
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