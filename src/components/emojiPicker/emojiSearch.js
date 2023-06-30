import { useState } from "react"
import styles from "./emojiPicker.module.scss"

export default function EmojiSearch({onSearche}){
    const [value, setValue] = useState("")

    function handleChange(e){
        setValue(e.target.value)
        onSearche(e)
    }

    return <input className={styles.search} type="text" onChange = {handleChange} value={value} />
}