import React from 'react'


function ArticleForm(){
    return (
      <>
        <div className='content-item'>
      <h2 className='content-item-title'>
        Novo Artigo
      </h2>
        <input className='content-item-title' type="text" placeholder="insira a imagem do artigo"/>
            <input className='content-item-title' type="text" placeholder="insira o título do artigo"/>
            <textarea className='articleTextArea' type="text" placeholder="insira o texto do artigo"></textarea>
     </div>
      </>
    );    
  }
    export default ArticleForm;