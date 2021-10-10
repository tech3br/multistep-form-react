import { ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step2");
    } else {
      alert("Preencha os campos!");
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setName, payload: e.target.value });
  };

  useEffect(() => {
    dispatch({ type: FormActions.setCurrentStep, payload: 1 });
  }, [dispatch]);

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <Button onClick={handleNextStep}>Próximo</Button>
      </C.Container>
    </Theme>
  );
};
