import React from 'react'
import { useState } from 'react'
import { ImQuill } from "react-icons/im";


function ArticleForm({}){
    const [image,setImage] = useState("");
    const [title,setTitle] = useState("");
    const [articleText,setArticleText] = useState("");
    return (
      <>
        <div className='new-content-item'>
      <h2 className='content-item-title'>
        Novo Artigo
      </h2>
        <input value={image} onChange={e=> setImage(e.target.value)} className='content-item-title' type="text" placeholder="insira a imagem do artigo"/>
            <input value={title} onChange={e=> setTitle(e.target.value)} className='content-item-title' type="text" placeholder="insira o título do artigo"/>
            <textarea value={articleText} onChange={e=> setArticleText(e.target.value)} className='articleTextArea' type="text" placeholder="insira o texto do artigo"></textarea>
            <button type='button' className='articleButton'><ImQuill/>
            {image}, {title}, {articleText}
        </button>
     </div>
      </>
    );    
  }
    export default ArticleForm;

