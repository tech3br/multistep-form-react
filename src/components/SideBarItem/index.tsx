import { Link } from "react-router-dom";
import * as C from "./styles";

interface SideBarItemProps {
  title: string;
  description: string;
  icon: string;
  path: string;
}

export const SideBarItem = ({
  title,
  description,
  icon,
  path,
}: SideBarItemProps) => {
  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>

        <C.IconArea></C.IconArea>
        <C.Point></C.Point>
      </Link>
    </C.Container>
  );
};

export default SideBarItem;
