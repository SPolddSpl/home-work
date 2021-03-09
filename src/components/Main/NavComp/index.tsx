import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Nav, Icon, Avatar } from "rsuite";

function NavComp(props: any) {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Nav {...props} activeKey={props.active} onSelect={props.onSelect}>
        <Nav.Item
          eventKey="main"
          onSelect={props.activeKey}
          componentClass={Link}
          to={"/"}>
          <Avatar
            size="xs"
            src="https://i.pinimg.com/236x/4c/38/6c/4c386c7744d50d99988388f13e9cd1b2.jpg"
            circle
          />
        </Nav.Item>
        <Nav.Item
          eventKey="home"
          onSelect={props.activeKey}
          icon={<Icon icon="home" />}
          componentClass={Link}
          to={`/home`}>
          Home
        </Nav.Item>
        <Nav.Item
          eventKey="search"
          onSelect={props.activeKey}
          componentClass={Link}
          to={`/search`}>
          Search
        </Nav.Item>
        <Nav.Item
          eventKey="factory"
          onSelect={props.activeKey}
          componentClass={Link}
          to={`/factory`}>
          Factory
        </Nav.Item>
        <Nav.Item
          eventKey="nums"
          onSelect={props.activeKey}
          componentClass={Link}
          to={`/nums`}>
          Nums
        </Nav.Item>
      </Nav>
    </>
  );
}

export default NavComp;
