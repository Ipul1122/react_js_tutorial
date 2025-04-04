import {useState, useEffect} from 'react';
import axios from 'axios'; //Import axios untuk melakukan HTTP request

function UserListAxios(){
    const [users, setUsers] = useState([]); //State untuk menyimpan data pengguna
    const [loading, setLoading] = useState(true); //State untuk menandakan apakah data sedang dimuat

    useEffect(() => {
        //Fungsi untuk mengambil data pengguna dari API
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data); //Set data pengguna ke state
                setLoading(false); //Set loading ke false setelah data diambil
            })
            .catch((error) =>console.error("Terjadi Kesalahan", error)); //Tangani error jika ada kesalahan saat mengambil data
    }, []); //Dependency array kosong agar useEffect hanya dijalankan sekali saat komponen pertama kali dimuat

    if(loading) return <h2>Loading...</h2>

    return (
        <div>
            <h2>Daftar Pengguna (Axios)</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserListAxios;
// import React from 'react';