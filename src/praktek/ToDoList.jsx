import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

function ToDoList() {
    const [tugas, setTugas] = useState([]);
    const [tugasBaru, setTugasBaru] = useState('');


    useEffect(() => {
        const tugasDisimpan = JSON.parse(localStorage.getItem("tugas")) || [];
        setTugas(tugasDisimpan); 
    },[]);

    useEffect(()=>{
        if (tugas.length > 0) {
            localStorage.setItem("tugas", JSON.stringify(tugas));
        }
    }, [tugas]);

    const tambahTugas = () => {
        if (tugasBaru.trim() === "") return;
        setTugas([...tugas, { text: tugasBaru, selesai:false }]);
        setTugasBaru("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") tambahaTugas();
    };

    const toggleTugasSelesai = (index) => {
        setTugas(
            tugas.map((tugas, i) => 
                i === index ? { ...tugas, selesai: !tugas.selesai} : tugas
            )
        );
    };

    const hapusTugas = (index) => {
        setTugas(tugas.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input 
            type="text"
            placeholder='Masukkan tugas baru...'
            value={tugasBaru}
            onChange={(e) => setTugasBaru(e.target.value) }
            onKeyDown={handleKeyDown}
            />

            <button onClick={tambahTugas}>Tambah</button>

            <ul>
                {tugas.map((tugas, index) => (
                    <TodoItem 
                        key={index}
                        tugas={tugas}
                        toggleTugasSelesai={() => toggleTugasSelesai(index)}
                        hapusTugas={() => hapusTugas(index)} 
                    />           
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;
// import React, { useState, useEffect } from 'react';