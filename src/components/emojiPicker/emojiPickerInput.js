import {useRef} from "react"
import EmojiPicker from "./emojiPicker";

export default function EmojiPickerInput(){

    const refInput = useRef(null);

    // function handleClick(){
    //     refInput.current.focus()
    // }

    return (
        <div>
            <input ref={refInput}/>
            {/* <button onClick={handleClick}>😀</button> */}
            <EmojiPicker/>
        </div>
    )
}