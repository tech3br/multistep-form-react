import { ReactNode } from "react";
import { Header } from "../Header";
import * as C from "./styles";

type ThemeProps = { children: ReactNode };

export const Theme = ({ children }: ThemeProps) => {
  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>...</C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
