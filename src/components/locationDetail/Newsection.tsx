import * as React from "react";

type section ={
    c_section: object;
    
}

export const Newsection = (data:section) => {
    const {c_section} = data;

  return (
    <div>
        
        <h1>{c_section.title}</h1>
        <img src={c_section.photo.url} alt="" />
        <a href={c_section.cta.link}>{c_section.cta.label}</a>
    </div>
  )
}
