import './CSS/Profissionais3.css';
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from '../GlobalContext/GlobalContext';

function CadastroPaciente2({ showError }) {
  const { paciente, setPaciente } = useContext(GlobalContext);

  const [cpf, setCpf] = useState(paciente.cpf);
  const [telefone, setTelefone] = useState(paciente.telefone);

  const { cpfValid, setCpfValid } = useContext(GlobalContext);
  const { cpfHover, setCpfHover } = useContext(GlobalContext);
  const { telefoneValid, setTelefoneValid } = useContext(GlobalContext);
  const { telefoneHover, setTelefoneHover } = useContext(GlobalContext);

  // Função máscara para CPF
  const maskCPF = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1-$2');
    return value;
  };

  // Função máscara para telefone
  const maskTelefone = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/, '($1) $2');
    value = value.replace(/^(\(\d{2}\) \d{5})(\d)/, '$1-$2');
    return value;
  };

  // Gerenciamento do CPF
  const handleCpfChange = (e) => {
    const maskedCpf = maskCPF(e.target.value);
    setCpf(maskedCpf);
    setCpfValid(maskedCpf.length == 14); // CPF válido se tiver 14 caracteres
  };

  // Gerenciamento do Telefone
  const handleTelefoneChange = (e) => {
    const maskedTelefone = maskTelefone(e.target.value);
    setTelefone(maskedTelefone);
    setTelefoneValid(maskedTelefone.length == 15 ); // Telefone válido se tiver 15 caracteres
  };

  useEffect(() => {
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      cpf: cpf,
    }));
  }, [cpf, setPaciente]);

  useEffect(() => {
    setPaciente((prevPaciente) => ({
      ...prevPaciente,
      telefone: telefone,
    }));
  }, [telefone, setPaciente]);

  return (
    <div className="selecao1">
      <h3 className='titulo-cadastro2'>Seus Dados..</h3>
      <div className="checkboxs2">
        {/* Campo CPF */}
        <div className="input-text">
          <label htmlFor="cpf">CPF</label>
          <div className="indicador-geral-div">
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="XXX.XXX.XXX-XX"
              maxLength="14"
              value={cpf}
              onChange={handleCpfChange}
              className="inputCRP"
            />
            <div className="span-geral">
              {/* Bolinha vermelha */}
              <span
                className={`status-indicador ${  !cpfValid ? "invalid" :""}`}
                onMouseEnter={() => setCpfHover(true)}
                onMouseLeave={() => setCpfHover(false)}
              />
            </div>
            <div className="div_mensagem">
              { !cpfValid && (
                <div
                  className="tooltip"
                  onMouseEnter={() => setCpfHover(true)}
                  onMouseLeave={() => setCpfHover(false)}
                >
                  {cpfHover && "CPF inválido ou vazio"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Campo Telefone */}
        <div className="input-text">
          <label htmlFor="telefone">Telefone</label>
          <div className="indicador-geral-div">
            <input
              type="text"
              id="telefone"
              name="telefone"
              placeholder="(XX) XXXXX-XXXX"
              maxLength="15"
              value={telefone}
              onChange={handleTelefoneChange}
              className="inputAlternativo"
            />
            <div className="span-geral">
              {/* Bolinha vermelha */}
              <span
                className={`status-indicador ${showError && !telefoneValid ? "invalid" : ""}`}
                onMouseEnter={() => setTelefoneHover(true)}
                onMouseLeave={() => setTelefoneHover(false)}
              />
            </div>
            <div className="div_mensagem">
              {showError && !telefoneValid && (
                <div
                  className="tooltip"
                  onMouseEnter={() => setTelefoneHover(true)}
                  onMouseLeave={() => setTelefoneHover(false)}
                >
                  {telefoneHover && "Telefone inválido ou vazio"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente2;
