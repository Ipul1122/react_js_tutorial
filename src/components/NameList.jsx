// List dan keys
// di react, kita perlu key unik untuk setiap item dalam list agar lebih efisien

function NameList(){
    const names = ["Budi", "Ipul", "Joko", "Rusdi"];

    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    )
}

export default NameList;
// Kita menggunakan method map untuk mengiterasi setiap item dalam array names. Kemudian kita mengembalikan elemen li untuk setiap item dalam array names. Kita juga memberikan key unik untuk setiap elemen li dengan menggunakan index sebagai key.

