const ComponenteUsuarios = () => {
    const [usuarios, setUsuarios] = React.useState([]);
    const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/users');

    React.useEffect(() => {
        if (data) setUsuarios(data);
    }, [data]);

    return (
        <div className='content-Usuario'>
            <h2>Lista de Usuarios</h2>
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            <div className='targetas'>
                {usuarios.map((usuario) => (
                    <div key={usuario.id} className='targeta-Usuario'>
                        <h3>{usuario.name}</h3>
                        <p>
                            <span className="catchphrase">{usuario.company?.catchPhrase}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ComponenteUsuarios />);