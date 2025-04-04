function ButtonKlik(){
    function handleKlik(){
        alert('Tombol diklik!');
    }

    return (
        <button onClick={handleKlik}>Klik Disini</button>
    )
}

export default ButtonKlik;