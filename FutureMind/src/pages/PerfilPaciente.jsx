function PerfilPaciente() {

    const user = JSON.parse(localStorage.getItem('User'));

    return (

        <div>
            <h1>{user.email}</h1>
        </div>
    );
};

export default PerfilPaciente;