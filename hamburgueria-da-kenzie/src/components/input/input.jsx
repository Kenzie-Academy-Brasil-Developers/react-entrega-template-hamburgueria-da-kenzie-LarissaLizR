import { useState } from "react";

import InputHeader from "../styled components/InputHeader/Index"
import GreenButton from "../styled components/Button/Index"

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