import { useState } from 'react';
import Header from './header';
import BodyMain from './BodyMain';
import SearchBar from './SearchBar';


function Main() {
    const [check,setChecked] = useState(Boolean);

    const checkAll = ()=>{
        setChecked(true)

    }
    return (
        <main>
            <Header />
            <div>
               {
                (check) ? <SearchBar /> : <BodyMain call = {check} onclick= {checkAll} />
               }
            
            </div>
           
       
        </main>
    );
}

export default Main;