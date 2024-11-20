import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Estilo padrão do Flatpickr
import { Portuguese } from "flatpickr/dist/l10n/pt"; // Tradução para PT-BR

function CadastroPaciente1() {
  const [date, setDate] = useState(null); // Estado para armazenar a data selecionada

  return (
    <div className="selecao1">
      <h3 className="titulo-cadastro2">Seus Dados..</h3>
      <div className="checkboxs2">
        <div className="input-text">
          <label htmlFor="nome">Nome Completo</label>
          <input type="text" name="nome" className="inputCRP" />
        </div>
        <div className="input-text">
          <label htmlFor="data">Data de Nascimento</label>
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
        </div>
      </div>
    </div>
  );
}

export default CadastroPaciente1;