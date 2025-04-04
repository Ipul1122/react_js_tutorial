import React from "react";

function TodoItem({tugas, toggleTugasSelesai, hapusTugas}) {
    return (
        <li>
            <span
                style={{ textDecoration: tugas.selesai ? 
                    "line-through" : "none" 
                    , cursor: "pointer" }}
                onClick={toggleTugasSelesai}
            > {tugas.text}
            </span>
            <button onClick={hapusTugas}>❌</button>
        </li>
    )    
}


export default TodoItem;