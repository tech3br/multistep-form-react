import { ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep3 = () => {
  const history = useHistory();
  const { push } = history;
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.email !== "" && state.github !== "") {
      push('/resume')
    } else {
      alert("Por favor, preencha os dados!");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setEmail, payload: e.target.value });
  };

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setGitHub, payload: e.target.value });
  };

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    }
    dispatch({ type: FormActions.setCurrentStep, payload: 3 });
  }, [dispatch, history, state.name]);

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha o seu GitHub para te localizarmos:</p>

        <hr />

        <label>
          Qual seu email
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Qual seu GitHub
          <input
            type="url"
            value={state.github}
            onChange={handleGitHubChange}
          />
        </label>

        <C.Buttons>
          <Button outline onClick={() => push("/step2")}>
            Voltar
          </Button>
          <Button onClick={handleNextStep}>Finalizar Cadastro</Button>
        </C.Buttons>
      </C.Container>
    </Theme>
  );
};
