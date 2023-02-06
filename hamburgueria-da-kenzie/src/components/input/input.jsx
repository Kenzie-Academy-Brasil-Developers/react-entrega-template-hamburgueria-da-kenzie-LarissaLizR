import { useState } from "react";

import InputHeader from "../styledComponents/inputHeader/Index"
import GreenButton from "../styledComponents/button/Index"

function InputSearch({ funcao }) {
  const [valueInput, setValueInput] = useState("");
  return (
    <InputHeader>
      <input
        onChange={(event) => {
          funcao(event.target.value);
        }}
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <GreenButton onClick={() => funcao(valueInput)}>
        Pesquisar
      </GreenButton>
    </InputHeader>
  );
}

export default InputSearch;