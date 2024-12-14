import './CSS/Profissionais3.css'
import React, { useContext, useState, useEffect } from "react"
import { GlobalContext } from '../GlobalContext/GlobalContext'

function CadastroProfissionais6({showError}) {
  const { profissional, setProfissional } = useContext(GlobalContext)

  const [cpf, setCpf] = useState(profissional.cpf);  // Gerenciamento do CPF
  const [telefone, setTelefone] = useState(profissional.telefone);  // Gerenciamento do telefone
  const { cpfProfissionalValid, setCpfProfissionalValid } = useContext(GlobalContext)
  const { cpfProfissionalHover, setCpfProfissionalHover } = useContext(GlobalContext)
  const { telefoneProfissionalValid, setTelefoneProfissionalValid } = useContext(GlobalContext)
  const { telefoneProfissinalHover, setTelefoneProfissionalHover } = useContext(GlobalContext)
   
  // Função para aplicar a máscara de CPF
  const maskCPF = (value) => {
    value = value.replace(/\D/g, ''); // Remove tudo o que não for número
    value = value.replace(/^(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após 3 primeiros dígitos
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3'); // Adiciona ponto após 6 primeiros dígitos
    value = value.replace(/\.(\d{3})(\d)/, '.$1-$2'); // Adiciona traço antes dos 2 últimos dígitos
    return value;
  };
 

  // Função para aplicar a máscara de telefone
  const maskTelefone = (value) => {
    value = value.replace(/\D/g, ''); // Remove tudo o que não for número
    value = value.replace(/^(\d{2})(\d)/, '($1) $2'); // Adiciona parênteses e espaço após o DDD
    value = value.replace(/^(\(\d{2}\) \d{5})(\d)/, '$1-$2'); // Adiciona o traço após os 5 primeiros números
    return value;
  };

  useEffect(() => {
    setCpfProfissionalValid(cpf.length === 14); // Verificação de validade para CPF
    setTelefoneProfissionalValid(telefone.length === 15); // Verificação de validade para telefone (com máscara)
  }, [cpf, telefone]);

  // Função de mudança do CPF com máscara
  const handleCpfChange = (e) => {
    const maskedCpf = maskCPF(e.target.value);
    setCpf(maskedCpf); // Atualiza o estado com o CPF formatado
  };

  // Função de mudança do telefone com máscara
  const handleTelefoneChange = (e) => {
    const maskedTelefone = maskTelefone(e.target.value);
    setTelefone(maskedTelefone); // Atualiza o estado com o telefone formatado
  };

  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      cpf: cpf, // Atualiza apenas o campo CRP
    }));
  }, [cpf, setProfissional]);

  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setProfissional((prevProfissional) => ({
      ...prevProfissional,
      telefone: telefone, // Atualiza apenas o campo telefone
    }));
  }, [telefone, setProfissional]);


  return (
    <div className="selecao1">
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">
        <div className="input-text">
          <label htmlFor="cpf">CPF</label>
          <div className='indicador-geral-div'>
          <input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="XXX.XXX.XXX-XX"
            maxLength="14"
            value={cpf}
            onChange={handleCpfChange} // Atualiza o estado com a máscara
            className="inputCRP"
          />
          <div className='span-geral'>
          <span
            className={`status-indicador ${!cpfProfissionalValid ? "invalid" : "" }`}
            onMouseEnter={() => setCpfProfissionalHover(true)}
            onMouseLeave={() => setCpfProfissionalHover(false)}
          ></span>
          </div>
          <div className='div_mensagem'>
          { !cpfProfissionalValid && (
                <div
                  className="tooltip"
                  onMouseEnter={() => setCpfProfissionalHover(true)}
                  onMouseLeave={() => setCpfProfissionalHover(false)}
                >
                  {cpfProfissionalHover && "CPF inválido ou vazio"}
                </div>
              )}
          </div>
          </div>
        </div>

        <div className="input-text">
          <label htmlFor="telefone">Telefone</label>
          <div className='indicador-geral-div'>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="(XX) XXXXX-XXXX"
            maxLength="15"  // Limita o comprimento ao tamanho máximo de telefone com a máscara
            value={telefone}
            onChange={handleTelefoneChange} // Atualiza o estado com a máscara de telefone
            className="inputCRP"
          />
          <div className='span-geral'>
          <span
            className={`status-indicador ${!telefoneProfissionalValid ? "invalid" : ""}`}
            onMouseEnter={() => setTelefoneProfissionalHover(true)}
            onMouseLeave={() => setTelefoneProfissionalHover(false)}
          ></span>
          </div>
          <div className="div_mensagem">
              {showError && !telefoneProfissionalValid&& (
                <div
                  className="tooltip"
                  onMouseEnter={() => setTelefoneProfissionalHover(true)}
                  onMouseLeave={() => setTelefoneProfissionalHover(false)}
                >
                  {telefoneProfissinalHover && "Telefone inválido ou vazio"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroProfissionais6
