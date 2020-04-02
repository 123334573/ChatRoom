declare var require: any

var React = require('react');

class Tip extends React.Component {
    render() {
        return (
            <div style={{ font: '10px' }}>{this.props.value}</div>
        );
    }
}

export default Tip;