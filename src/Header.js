import React from 'react'


function Header(){
    return (
      <div className="header">
      
      <div className="header-logo">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5f14a91570febc53e79f1ddd/1598481962013-KRWYOQ9DSA462MCABZBH/Brave-Animal-Shelter-Logo_Primary-1-Color-Turquoise.png" />
      </div>

      
      <div className="header-item-title">
        <div className="header-tag">Brave Animal Rescue</div>
      </div>
      
      <div className="header-actions">
        <div className="header-actions-item">Blog</div>
        <div className="header-actions-item">Sobre</div>
        <div className="header-actions-item">Projetos</div>
        <div className="header-actions-item">Artigos</div>
      </div>
    </div>
    );
  }
  export default Header;