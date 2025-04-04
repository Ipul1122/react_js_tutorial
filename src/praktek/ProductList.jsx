function ProductList(){
    const products = [
        {id: 1, name: 'Jeruk', price: 10000},
        {id: 2, name: 'Apel', price: 20000},
        {id: 3, name: 'Mangga', price: 30000},
    ];

    return(
        <div>
            <h2>Daftar Produk Buah</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - Harga Rp {product.price.toLocaleString("id-ID")}
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default ProductList;