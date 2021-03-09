import React from "react";
import { Container, Content, FlexboxGrid, Footer, Header } from "rsuite";
import {
  Route,
  RouteComponentProps,
  Switch,
  useLocation,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import NavComp from "./NavComp";
import Home from "../Home";
import Search from "../Search";
import "./index.css";
import FormFactory from "../FormFactory";
import formData from "../../form.json";
import ThreeNums from "../ThreeNums";

import PropTypes from "prop-types";
import Copyright from "../Copyright";

interface MainProps {}

interface MainState {
  active: string;
  url: string;
}

class Main extends React.Component<RouteComponentProps, MainState> {
  constructor(props: any) {
    super(props);

    this.state = {
      active: window.location.pathname.replace("/", ""),
      url: this.props.match.url,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    if (this.state.active === "home-work") {
      this.setState({
        active: "main",
      });
      console.log(this.props);
    }
  }

  handleSelect(activeKey: string) {
    this.setState({ active: activeKey });
  }

  render() {
    const { active } = this.state;

    return (
      <>
        <Container>
          <Header>
            <NavComp
              appearance="subtle"
              active={active}
              onSelect={this.handleSelect}
            />
          </Header>
          <Content>
            <FlexboxGrid
              justify="center"
              style={{ height: "calc(100% - 100px)" }}>
              <FlexboxGrid.Item className="flex-main-container">
                <Switch>
                  <Route
                    exact
                    path={`${this.state.url}`}
                    component={Copyright}
                  />
                  <Route path={`/home`} component={Home} />
                  <Route path={`/search`} component={Search} />
                  <Route path={`/factory`}>
                    <FormFactory form={formData} />
                  </Route>
                  <Route path={`/nums`} component={ThreeNums} />
                </Switch>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
          <Footer>Footer</Footer>
        </Container>
      </>
    );
  }
}

export default withRouter(Main);
