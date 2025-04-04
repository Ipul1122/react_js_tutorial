// Conditional Rendering
// Tampilkan komponen berdasarakan kondisi tertentu

import { useState } from "react";

function UserStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            {isLoggedIn ? <h2>Selamat Datang, User</h2>:  <h2>Silahkan Login</h2>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Logout" : " Login"}
            </button>
        </div>
    );
}

export default UserStatus;
