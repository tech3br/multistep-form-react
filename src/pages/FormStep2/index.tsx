import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { SelectOption } from "../../components/SelectOption";
import { Theme } from "../../components/Theme";
import { FormActions, useForm } from "../../contexts/FormContext";
import * as C from "./styles";

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step3");
    } else {
      alert("Preencha os campos!");
    }
  };

  const setLevel = (level: number) => {
    dispatch({ type: FormActions.setLevel, payload: level });
  };

  useEffect(() => {
    if (state.name === "") {
      history.push("/");
    } else {
      dispatch({ type: FormActions.setCurrentStep, payload: 2 });
    }
  }, [dispatch, history, state.name]);

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual
          profissionalmente:
        </p>

        <hr />

        <SelectOption
          title="Sou Iniciante"
          description="Comecei a programar há menos de dois anos"
          icon="👶"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há dois anos ou mais"
          icon="🤑"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <C.Buttons>
          <Button outline onClick={() => history.push("/")}>
            Voltar
          </Button>
          <Button onClick={handleNextStep}>Próximo</Button>
        </C.Buttons>
      </C.Container>
    </Theme>
  );
};
