declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import Tip from './tip';
import Message from './message';
import InputBox from './inputBox';

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { history: [{ isTip: false, isUser: true, value: "hello", date: new Date() }] };

        this.handleSend = this.handleSend.bind(this);
    }
    render() {
        return (
            <div className="chat-room">
                <div className="chat-Room-head"><h1>聊天室</h1></div>
                <div className="chat-Room-body"></div>
                <div className="chat-Room-foot"><InputBox onSend={this.handleSend} /></div>
            </div>
        );
    }

    handleSend(value) {
        var history = this.state.history;
        this.setState({
            history: history.concat([{
                isTip: false, isUser: true, value: value, date: new Date()
            }])
        });
    }
}

ReactDOM.render(<ChatRoom />, document.getElementById('root'));