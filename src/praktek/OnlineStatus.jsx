import { useState } from "react";

function OnlineStatus() {
    const[isOnline, setIsOnline] = useState(false);

    return (
        <div>
            <h2>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</h2>
            <button onClick={() => setIsOnline(!isOnline)}>
                {isOnline ? "Logout" : " Login"}
            </button>
        </div>
    )
}

export default OnlineStatus;