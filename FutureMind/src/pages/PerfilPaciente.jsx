import { useEffect } from "react";

function PerfilPaciente() {

    const user = JSON.parse(localStorage.getItem('User'));

    useEffect(() => { alert(user.profissional); }, [])

    return (

        <div>
            <h1>{user.email}</h1>
        </div>
    );
};

export default PerfilPaciente;