import { ReactNode } from "react";
import { Header } from "../Header";
import * as C from "./styles";
import { SideBarItem } from "../SideBarItem";
type ThemeProps = { children: ReactNode };

export const Theme = ({ children }: ThemeProps) => {
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
            />
            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
            />
            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
