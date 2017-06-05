import React from "react";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Header from "./components/shared/header/header";
import Footer from "./components/shared/footer/footer";
import Index from "./components/index/index";
import Login from "./components/login/login";

class App extends React.Component {

    constructor (props) {
        super (props);
    }

    render () {

        const {sidebar} = this.props;

        return (
            <div id="main-container" className={sidebar.showSidebar ? "toggle" : ""}>
                <div id="main-inner-container">
                    <div id="content-container">
                        <Header />

                        <div id="content-inner-container" className="container-fluid">
                            <Route exact={true} path="/" component={Index}/>
                            <Route path="/login" component={Login}/>
                        </div>

                        <Footer />
                    </div>
                    <div id="sidebar-container"></div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
};

export default withRouter(connect(mapStateToProps)(App));