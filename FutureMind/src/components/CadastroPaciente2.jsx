import './CSS/Profissionais3.css'
import React, { useContext, useState, useEffect } from "react"
import { GlobalContext } from '../GlobalContext/GlobalContext'

function CadastroPaciente2() {
  const { paciente, setPaciente } = useContext(GlobalContext)

  const [cpf, setCpf] = useState(paciente.cpf);  // Gerenciamento do CPF
  const [telefone, setTelefone] = useState(paciente.telefone);  // Gerenciamento do telefone
  const { cpfValid, setCpfValid } = useContext(GlobalContext)
  const { cpfHover, setCpfHover } = useContext(GlobalContext)
  const { telefoneValid, setTelefoneValid } = useContext(GlobalContext)
  const { telefoneHover, setTelefoneHover } = useContext(GlobalContext)
   
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
    setCpfValid(cpf.length === 14); // Verificação de validade para CPF
    setTelefoneValid(telefone.length === 15); // Verificação de validade para telefone (com máscara)
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
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      telefone: telefone, // Atualiza apenas o campo telefone
    }));
  }, [telefone, setPaciente]);

  useEffect(() => {
    // Atualiza o contexto global sempre que o CRP muda
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      cpf: cpf, // Atualiza apenas o campo cpf
    }));
  }, [cpf, setPaciente]);

  return (
    <div className="selecao1">
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">
        <div className="input-text">
          <label htmlFor="cpf">CPF</label>
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
          <span
            className={`status-indicador ${cpfValid ? "valid" : cpf ? "invalid" : "neutro"}`}
            onMouseEnter={() => setCpfHover(true)}
            onMouseLeave={() => setCpfHover(false)}
          ></span>
          {cpfHover && (
            <div className="tooltip">
              {cpfValid ? "cpf ok" : "cpf errado"}
            </div>
          )}
        </div>

        <div className="input-text">
          <label htmlFor="telefone">Telefone</label>
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
          <span
            className={`status-indicador ${telefoneValid ? "valid" : telefone ? "invalid" : "neutro"}`}
            onMouseEnter={() => setTelefoneHover(true)}
            onMouseLeave={() => setTelefoneHover(false)}
          ></span>
          {telefoneHover && (
            <div className="tooltip">
              {telefoneValid ? "telefone ok" : "telefone errado"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente2;
