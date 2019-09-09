import React from "react";
import { Link } from "react-router-dom";
import { Menu} from "semantic-ui-react";

const Nav = () => {

  return (
    <Menu>
      <Menu.Item as={Link} to={"/projects"}>
        Projects
      </Menu.Item>
      <Menu.Item as={Link} to={"/actions"}>
        Actions
      </Menu.Item>

    </Menu>
  );
};

export default Nav;