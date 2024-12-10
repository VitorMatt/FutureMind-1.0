import { useContext, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; 
import { Portuguese } from "flatpickr/dist/l10n/pt"; 
import { GlobalContext } from "../GlobalContext/GlobalContext";

function CadastroProfissionais5() {

  const { profissional } = useContext(GlobalContext);
  const [name, setName] = useState(profissional.nome_completo);
  const [date, setDate] = useState(profissional.data_nascimento); 
  const {nome_profissinalValid, setNomeProfissionalValid} = useContext(GlobalContext)
  const {nome_profissinalHover, setNomeProfissionalHover} = useContext(GlobalContext)
  const {data_nascimentoProfissionalValid, setData_nascimentoProfissionalValid} = useContext(GlobalContext)
  const {data_nascimentoProfissionalValidHover, setData_nascimentoProfissionalHover} = useContext(GlobalContext)
  
  setNomeProfissionalValid(name.length > 3) 

  if(date > 1){

    const hoje = new Date();
    const idade = hoje.getFullYear() - date.getFullYear();
    const mesAtual = hoje.getMonth();
    const mesNascimento = date.getMonth();
    const diaAtual = hoje.getDate();
    const diaNascimento = date.getDate();
  
    // Verificação de se o usuário tem menos de 18 anos
    const temMenosDe18Anos =
      idade < 18 ||
      (idade === 18 && mesAtual < mesNascimento) ||
      (idade === 18 && mesAtual === mesNascimento && diaAtual < diaNascimento);
      setData_nascimentoProfissionalValid(!temMenosDe18Anos)
      
   }
   
  useEffect(() => {

    profissional.data_nascimento = date;
  }, [date]);

  useEffect(() => {

    profissional.nome_completo = name;
  }, [name]);

    return (
      <div className="selecao1">
      
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">

    <div className="input-text">
      <label htmlFor="">Nome Completo</label>
      <input
       value={name}
       onChange={(e) => { setName(e.target.value) }}
       type="text" 
       name="file"
       className="inputCRP" 
       />

        <span
          className={`status-indicador ${
          nome_profissinalValid ? "valid" :  name ? "invalid" : "neutro"
         }`}
         onMouseEnter={() => setNomeProfissionalHover(true)}
         onMouseLeave={() => setNomeProfissionalHover(false)}
         ></span>
         {nome_profissinalHover&& (

          <div className="tooltip">
            {nome_profissinalValid

              ? "Nome ok"
              : "Nome Precisa Ter Mais De 3 Caracter e Ter um valor "
          
              }
          </div>
         )}
    </div>
    <div className="input-text">
      <label htmlFor="">Data de Nascimento</label>
      <Flatpickr
            options={{
              locale: Portuguese, // Configuração para Português
              dateFormat: "d/m/Y", // Formato da data
              defaultDate: "today", // Data padrão
            }}
            value={date} // Data atual no estado
            onChange={(selectedDates) => setDate(selectedDates[0])} // Atualiza a data selecionada
            className="inputCRP" // Classe CSS
          />
           <span
          className={`status-indicador ${
          data_nascimentoProfissionalValid? "valid" :  date ? "invalid" : "neutro"
         }`}
         onMouseEnter={() => setData_nascimentoProfissionalHover(true)}
         onMouseLeave={() => setData_nascimentoProfissionalHover(false)}
         ></span>
         {data_nascimentoProfissionalValidHover&& (

          <div className="tooltip">
            {data_nascimentoProfissionalValid

              ? "Nome ok"
              : "Nome Precisa Ter Mais De 3 Caracter e Ter um valor "
          
              }
          </div>
         )}
    </div>
      </div>
    </div>
    )
  }
  
  
  
  export default CadastroProfissionais5