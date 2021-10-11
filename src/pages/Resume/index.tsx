import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./styles";

export const Resume = () => {
  const history = useHistory();
  const { push } = history;
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === "" && state.email === "") {
      push("/");
    }
    dispatch({ type: FormActions.setCurrentStep, payload: 4 });
  }, [dispatch, push, state.email, state.name]);

  return (
    <Theme>
      <C.Container>
        <p>Passo 4/4</p>
        <h1>Resumo:</h1>
        <p>Aqui está o resumo de suas informações:</p>
        <p>Nome: {state.name}</p>
        <p>Email: {state.email}</p>
        <p>Github: {state.github}</p>
        <p>Nível: {state.level}</p>
      </C.Container>
    </Theme>
  );
};
