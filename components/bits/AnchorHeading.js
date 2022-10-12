import React, {useState} from 'react'
import {FaLink} from "react-icons/fa"


export default function AnchorHeading({text}) {
    const [color, setColor] = useState('lightgray');

    const AnchorClicked = async () => {
        await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${text.replaceAll(" ", "-")}`)
    }

  return (
    <div 
        id={text.replaceAll(" ", "-")}
        style={{ display: "inline-flex", alignItems: "center"}}>
        {text} 
        <span 
            style={{cursor: "pointer"}} 
            onMouseOver={(x) => setColor('black')} 
            onMouseLeave={() => setColor('lightgray')}
            onClick={async () => await AnchorClicked()}>
            <FaLink size={15} color={color} className="ml-2" />
        </span>
    </div>
  )
}
