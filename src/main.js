import React from 'react';

import HornedBeasts from './horned-beasts';
import Data from './data.json'



class Main extends React.Component{
  render(){
    
    return(
      <>
      {Data.map((value)=>{
        return <HornedBeasts key = {value.title} src = {value.image_url} title = {value.title} description = {value.description}/>
      })}
        
     
      </>
    )
  }
}

{/* <ul>
{items.map((item,index)=>{
    return <li key={index}>{item}</li>
})}
</ul> */}
export default Main;