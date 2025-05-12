import React from "react";

class BoxComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="head">
                    <h1>Box Component</h1>
                </div>
                <div className="box">
                    {this.props.render(this.props.data)}
                </div>

            </>
        );
    }
}
export default BoxComponent;