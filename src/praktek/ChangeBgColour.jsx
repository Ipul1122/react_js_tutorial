import { useState } from "react";

function ChangeBgColour() {
    const [bgColor, setBgColor] = useState("white");

    function changeColor(){
        const colors = ["red", "green", "blue", "yellow", "purple", "brown", "black"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        setBgColor(randomColor);
    }

    return (
        <div style={{ backgroundColor:bgColor, height: "10vh", 
            padding: "10px",  }}>
                <button onClick={changeColor}>Ubah Warna Latar belakang</button>
            </div>
    );
}

export default ChangeBgColour;