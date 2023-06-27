import { useState } from "react"

export default function EmojiSearch({onSearche}){
    const [value, setValue] = useState("")

    function handleChange(e){
        setValue(e.target.value)
        onSearche(e)
    }

    return <input type="text" onChange = {handleChange} value={value} />
}