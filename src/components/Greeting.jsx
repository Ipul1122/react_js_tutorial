function Greeting(props) {
    return <h2>Halo, nama saya {props.name}</h2>;
}

function Umur(props) {
    return <h2>Umur saya {props.age} tahun</h2>;
}

// Ekspor satu per satu
export  { Greeting, Umur };
