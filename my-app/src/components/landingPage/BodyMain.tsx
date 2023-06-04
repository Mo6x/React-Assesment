import React from 'react';
interface Checks{
    call:boolean,
    onclick:() =>void;
}


function BodyMain(props:Checks) {
    return (
        <div className='mob'>
              <h1>What are you looking for?</h1>
                <p>Get started by searching & filtering a few</p>
                <button className='buttonApi' onClick={props.onclick}>Fetch data</button>
                <p>or search for an item</p>  
        </div>
    );
}

export default BodyMain;