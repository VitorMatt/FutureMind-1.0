import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

const [userProfessional, setUserProfessional] = useState(false);

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

    return(
        <GlobalContext.Provider value={{profissionais, userProfessional, setUserProfessional}}>
            {children}
        </GlobalContext.Provider>
    );
};