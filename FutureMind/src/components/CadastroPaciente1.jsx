import React, { useContext, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR
import { GlobalContext } from "../GlobalContext/GlobalContext";

function CadastroPaciente1() {

  const { paciente } = useContext(GlobalContext)
  
  const [date, setDate] = useState(paciente.data_nascimento);
  const [name, setName] = useState(paciente.nome_completo);
  const [message, setMessage] = useState('preencha');
  

  useEffect(() => {
    paciente.nome_completo = name;
  }, [name]);

  useEffect(() => {
    paciente.data_nascimento = date;
  }, [date]);

<<<<<<< HEAD
=======
    paciente.data_nascimento = date
  // }, [date])
  

=======
<<<<<<< HEAD

=======
  
>>>>>>> 18453e0f23890041cd3755a8e625b414f0d84d2a
  function validar(item) {
    
    if (item.length===0) setMessage('preencha'); else setMessage('')

  }
>>>>>>> 4b17c148d44c71192ddcc833b899d13206405f19
>>>>>>> e2df26f99cde5156aa9f6aa6d033d08217a9c90a
  return (
    <div className="selecao1">
      <h3 className="titulo-cadastro2">Seus Dados..</h3>
      <div className="checkboxs2">
        <div className="input-text">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputCRP"
          />
<<<<<<< HEAD
          
=======
          {errors.nome && <p className="error-text">{errors.nome}</p>}
<<<<<<< HEAD
          <input type="text" name="nome" value={name} onChange={(e) => {setName(e.target.value),validar(e.target.value)}} className="inputCRP" /> {message}
=======
<<<<<<< HEAD
=======
          <input type="text" name="nome" value={name} onChange={(e) => {setName(e.target.value),validar(e.target.value)}} className="inputCRP" /> {message}
>>>>>>> 4b17c148d44c71192ddcc833b899d13206405f19
>>>>>>> 18453e0f23890041cd3755a8e625b414f0d84d2a
>>>>>>> e2df26f99cde5156aa9f6aa6d033d08217a9c90a
        </div>
        <div className="input-text">
          <label htmlFor="data">Data de Nascimento</label>
          <Flatpickr
            options={{
              locale: Portuguese,
              dateFormat: "d/m/Y",
              defaultDate: "today",
            }}
            
            value={date}
            onChange={(selectedDates) => setDate(selectedDates[0])}
            className="inputCRP"
            
          />
        
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente1;