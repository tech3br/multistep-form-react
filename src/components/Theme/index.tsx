import { ReactNode } from "react";
import { Header } from "../Header";
import * as C from "./styles";
import { SideBarItem } from "../SideBarItem";
import { useForm } from "../../contexts/FormContext";
type ThemeProps = { children: ReactNode };

export const Theme = ({ children }: ThemeProps) => {
  const { state } = useForm();
  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              selected={state.currentStep === 1}
            />

            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              selected={state.currentStep === 2}
            />

            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              selected={state.currentStep === 3}
            />

            <SideBarItem
              title="Resumo"
              description="Resumo das suas informações"
              icon="list"
              path="/resume"
              selected={state.currentStep === 4}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
