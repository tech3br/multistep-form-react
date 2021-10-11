import { Link } from "react-router-dom";
import * as C from "./styles";
import { FaUser, FaBook, FaMailBulk, FaList } from "react-icons/fa";

interface SideBarItemProps {
  title: string;
  description: string;
  icon: string;
  path: string;
  selected: boolean;
}

export const SideBarItem = ({
  title,
  description,
  icon,
  path,
  selected,
}: SideBarItemProps) => {
  const selectedIconByName = (icon: string) => {
    switch (icon) {
      case "profile":
        return <FaUser size="22" />;
      case "book":
        return <FaBook size="22" />;
      case "mail":
        return <FaMailBulk size="22" />;
      case "list":
        return <FaList size="22" />;
    }
  };

  return (
    <C.Container>
      <Link to={path}>
        <C.Info>
          <C.Title>{title}</C.Title>
          <C.Description>{description}</C.Description>
        </C.Info>

        <C.IconArea selected={selected}>{selectedIconByName(icon)}</C.IconArea>
        <C.Point selected={selected}></C.Point>
      </Link>
    </C.Container>
  );
};

export default SideBarItem;
