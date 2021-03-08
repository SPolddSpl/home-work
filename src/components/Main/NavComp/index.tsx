import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Icon, Avatar } from 'rsuite';


function NavComp(props: any) {
    return (
        <>
            <Nav {...props} activeKey={props.active} onSelect={props.onSelect}>
                <Nav.Item eventKey="main" onSelect={props.activeKey} componentClass={Link} to={"/"} >
                    <Avatar size="xs" src="https://i.pinimg.com/236x/4c/38/6c/4c386c7744d50d99988388f13e9cd1b2.jpg" circle />
                </Nav.Item>
                <Nav.Item eventKey="home" onSelect={props.activeKey} icon={<Icon icon="home" />} componentClass={Link} to={"/home"}>
                    Home
                </Nav.Item>
                <Nav.Item eventKey="search" onSelect={props.activeKey} componentClass={Link} to={"/search"}>Search</Nav.Item>
                <Nav.Item eventKey="solutions" onSelect={props.activeKey}>Solutions</Nav.Item>
                <Nav.Item eventKey="products" onSelect={props.activeKey}>Products</Nav.Item>
                <Nav.Item eventKey="about" onSelect={props.activeKey}>About</Nav.Item>
            </Nav>
        </>
    )
}


export default NavComp;