import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    }
    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <p>Changed!</p>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
}

export default Greeting;