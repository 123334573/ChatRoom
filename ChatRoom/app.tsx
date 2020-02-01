declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

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
                <div className="chat-Room-body">{this.state.history.map(recoed => {
                    return recoed.isTip ? (<Tip key={recoed.date} value={recoed.value} />) : (<Message key={recoed.date} isUser={recoed.isUser} value={recoed.value} />);
                })}</div>
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

class Message extends React.Component {
    render() {
        return (
            <div isUser={this.props.isUser}>{this.props.value}</div>
        );
    }
}

class Tip extends React.Component {
    render() {
        return (
            <div>{this.props.value}</div>
        );
    }
}

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.text} />
                <button onClick={this.handleClick}>发送</button>
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();
        var value = this.state.text.trim();
        if (value) {
            this.props.onSend(value);
            this.setState({ text: '' });
        }
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }
}

ReactDOM.render(<ChatRoom />, document.getElementById('root'));