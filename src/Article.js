import React, { useState } from 'react'



function Article({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="content-column">
        <div className="content-item">
          <div onClick={() => setOpen(!open)} className="content-header">
            <img
              src={item.image}
              alt="porquinho da india com brócolis" />
            <p className="content-item-title">
              {item.title}
            </p>
          </div>
          {open ? <div className="content-body">
            {item.content}
          </div> : null}
        </div>
      </div>
    </>
  );
}
export default Article;