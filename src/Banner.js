import React from 'react'


function Banner(){
  return (
    <>
      <div className="banner">
        <div className="banner-image">
          <img id="dogWallpaper" src="https://giftlab.co/wp-content/uploads/2021/08/Copy-of-GLBP-Cover-59.png" />
        </div>
     </div>

    
      <div className="banner-text">
         <h2 className="banner-title">
          "Não há diferença fundamental entre humanos e animais na capacidade de
          sentir prazer e dor, felicidade e miséria".
          <br/>
         Charles Darwin
        </h2>
        <p className="banner-p">
          Os olhos de um animal têm o poder de falar uma grande língua.
        </p>
     </div>

     <div className="divider"></div>
    </>
  );    
}
  export default Banner;