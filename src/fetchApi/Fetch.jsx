import {useState, useEffect} from 'react';

function UserList(){
    const [Users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) //Ubah response ke JSON
            .then((data) => {
                setUsers(data); //Set data ke state Users
                setLoading(false); //Set loading ke false setelah data diambil
            })
             .catch((error) => console.error("Terjadi Kesalahan", error)); //Tangani error jika ada kesalahan saat mengambil data
        }, []); //Dependency array kosong agar useEffect hanya dijalankan sekali saat komponen pertama kali dimuat
    

        if (loading) return <h2>Loading..</h2>;
        
        return (
            <div>
                <h2>Daftar Pengguna (FETCH API)</h2>
                <ul>
                    {Users.map((user) =>(
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                </ul>
            </div>
        )
}

export default UserList;