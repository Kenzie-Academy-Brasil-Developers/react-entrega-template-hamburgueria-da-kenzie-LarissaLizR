import { useState } from "react";

import InputHeader from "../styledComponents/InputHeader/Index"
import GreenButton from "../styledComponents/Button/Index"

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