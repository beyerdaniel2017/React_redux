import React from "react";

class Index extends React.Component {

    constructor (props) {
        super (props);
    }

    render () {
        return (
            <div className="row">
                <div id="index" className="col-md-12">
                    Welcome to React/Redux app :)
                </div>
            </div>
        );
    }

}

export default Index;