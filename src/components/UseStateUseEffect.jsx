import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval (()=> {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup function untuk menghentikan interval saat komponen di-unmount
        return () => clearInterval(interval);
        }, []);  // Dependecy array kosong -> hanya dijalankan saat pertama kali render

    return (
        <div>
            <h2>Waktu Sekarang: {time}</h2>
        </div>
    );
}

export default Clock;