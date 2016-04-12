import React from 'react';
import Search from './Search';
import Explore from './Explore';
import List from './List';

class Home extends React.Component {
 render() {
   return (<div className='container'>
             <div className='row'>
               <h2 className='center text'>Welcome to Piknik!</h2>
                 <div className= "col s12 m9">
                 <Search />
                 </div>
                 <div className= "col s12 m3">
                 <List />
                 </div>
             </div>
           </div>
         );
   }
}

export default Home;
