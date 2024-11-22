import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

const profissionais = [
    {
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

const user = {

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
    email: ''
}

    return(
        <GlobalContext.Provider value={{profissionais, user}}>
            {children}
        </GlobalContext.Provider>
    );
};