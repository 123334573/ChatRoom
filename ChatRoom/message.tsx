declare var require: any

var React = require('react');

class Message extends React.Component {
    render() {
        return (
            <div style={{ font: '20px' }} className={this.props.isUser.toString()}>{this.props.value}</div>
        );
    }
}

export default Message;