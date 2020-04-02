declare var require: any

var React = require('react');
import { connect } from 'react-redux';
import { sendMessage } from './action';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef} />
                <button onClick={this.handleClick}>·¢ËÍ</button>
            </div>
        );
    }

    handleClick(e) {
        e.preventDefault();
        let input = this.myRef.current;
        let value = input.value.trim();
        if (value) {
            this.props.onClick(value);
        }
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (value) => {
            dispatch(sendMessage(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(InputBox);