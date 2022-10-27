import React from 'react'
import Article from './Article'


function Articles({data}){
  return (
    <>
      <div className="content">
        <div className="content-row">
        {data.map(item=><Article item={item}/>)}
        </div>
     </div>
    </>
  );    
}
  export default Articles;