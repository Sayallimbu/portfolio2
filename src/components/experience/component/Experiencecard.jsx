import React from 'react'
import Css from "../experience.module.css"
function experiencecard({date, name, type, body}) {
  return (
<>
<div className={Css["card"]}>
<p>{date}</p>
<h1>{name}</h1>
<h2>{type}</h2>
<h4>{body}</h4>
</div>
</>
  )
}

export default experiencecard