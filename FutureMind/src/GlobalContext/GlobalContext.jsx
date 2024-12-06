import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

const profissionais = [
    {
        id: 1,
        nome: 'João Miguel da Cruz', 
        sobre: 'Psicológo recém formado em Psicanálise atendimento a adolscente, adultos e casais. Atendo oito meses como psicólogo clinico em diferentes situações psicoafetivas, dependencia química, estados depressivos, luto, alternãncia de humor, baixa alto estima, estados de angústia e desorganização pessoal.',
        abordagem: ['Psicanalista', 'Terapia Cognitiva Comportamental'],
        crp: '98/94743',
        preco: 30,
        tempo: 40,
        foto: 'joao_peedro.png',
        especialidades: ["PCD's", 'Autoestima', 'Angústia', 'Depressão', 'LGBTQIA+'],
},
{
    id: 2,
    nome: 'Paula Lusitano', 
    sobre: 'Psicológa recém formada em Psicanálise atendimento a adolscente, adultos e casais. Atendo oito meses como psicóloga clinica em diferentes situações psicoafetivas, dependencia química, estados depressivos, luto, alternãncia de humor, baixa alto estima, estados de angústia e desorganização pessoal.',
    abordagem: ['Psicanalista', 'Terapia Cognitiva Comportamental'],
    crp: '23/19285',
    preco: 50,
    tempo: 50,
    foto: 'paula_lusitano.jpg',
    especialidades: ['Autoestima', 'Depressão', 'LGBTQIA+'],
},
{
    id: 3,
    nome: 'Thiago Rodrigues', 
    sobre: 'Psicológo recém formado em Psicanálise atendimento a adolscente, adultos e casais. Atendo oito meses como psicólogo clinico em diferentes situações psicoafetivas, dependencia química, estados depressivos, luto, alternãncia de humor, baixa alto estima, estados de angústia e desorganização pessoal.',
    abordagem: ['Terapia Cognitiva Comportamental'],
    crp: '67/44647',
    preco: 45,
    tempo: 60,
    foto: 'thiago.jpg',
    especialidades: ['Adolescência', 'Ansiedade', 'Autoestima', 'Depressão', 'LGBTQIA+'],
}
]

const profissional = {

    id_profissional: 1,
    nome_completo: '',
    cpf:'',
    telefone:'',
    preferencias: [],
    data_nascimento: '',
    especializacao: [],
    senha: '',
    foto: '',
    abordagem: '',
    email: '',
    crp:'',
    preco: 0.00
}

const paciente = {

    id_paciente: 1,
    nome_completo: '',
    cpf:'',
    telefone:'',
    data_nascimento: '',
    senha: '',
    foto: '',
    email: ''
}

    const [user, setUser] = useState(() => {
    
        return JSON.parse(localStorage.getItem('User-Profile')) || null;
    });
    
    useEffect(() => {

        if (user) {

            localStorage.setItem('User-Profile', JSON.stringify(user));
        } else {

            localStorage.removeItem('User-Profile');
        }
    }, [user]);

    const [id, setId] = useState(() => {
    // Recupera o valor de ID do localStorage, se existir
        return localStorage.getItem('id') || null;
    });

    useEffect(() => {
    // Sempre que o ID mudar, atualize o localStorage
    if (id) {
      localStorage.setItem('id', id);
    } else {
      localStorage.removeItem('id');
    }
    }, [id]);
    
    const [usernameValid, setUsernameValid] = useState(false)
    const [usernameHover, setUsernameHover] = useState(false)

    return(
        <GlobalContext.Provider value={{profissionais, profissional, paciente, user, setUser, id, setId, usernameValid, setUsernameValid, usernameHover, setUsernameHover  }}>
            {children}
        </GlobalContext.Provider>
    );
};