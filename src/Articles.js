import React from 'react'
import Article from './Article'


function Articles(){
  return (
    <>
      <div className="content">
        <div className="content-row">
          <Article/>
          <Article/>
        </div>

        <div className="content-row">
          <Article/>
          <Article/>
        </div>

        <div className="content-row">
          <Article/>
        </div>
     </div>
    </>
  );    
}
  export default Articles;