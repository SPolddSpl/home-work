import React from 'react';
import { Container, Content, FlexboxGrid, Footer, Grid, Header, Nav } from 'rsuite';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import NavComp from './NavComp';
import Home from '../Home';
import Search from '../Search';
import FlexboxGridItem from 'rsuite/lib/FlexboxGrid/FlexboxGridItem';
import './index.css';

interface MainProps {

}

interface MainState {
    active: string;
}

class Main extends React.Component<MainProps, MainState>{

    constructor(props: any) {
        super(props);

        this.state = {
            active: window.location.pathname.replace('/', '')
        };
        console.log(this.state.active)

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(activeKey: string) {
        this.setState({ active: activeKey });
    }

    render() {

        const { active } = this.state

        if (active == '') {
            this.setState({
                active: 'main'
            })
        }
        return (
            <>
                <Container>
                    <Header>
                        <NavComp appearance="subtle" active={active} onSelect={this.handleSelect} />
                    </Header>
                    <Content>
                        <FlexboxGrid justify="center" >
                            <FlexboxGrid.Item className="flex-main-container">
                                <Switch>
                                    <Route exact path="/" />
                                    <Route path="/home" component={Home} />
                                    <Route path="/search" component={Search} />
                                </Switch>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                    </Content>
                    <Footer>
                        Footer
                    </Footer>
                </Container>
            </>
        )
    };
}

export default Main;