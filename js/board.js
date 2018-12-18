class Key extends React.Component {
    render() {
        return (
            <td class="key" id={this.props.keyid}><p>{this.props.keyid}</p></td>
        )
    }
}

class Longrow extends React.Component {
    ids = pos => {
        //return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[pos];
        return "ZYXWVUTSRQPONMLKJIHGFEDCBA"[pos];
    }
    render() {
        return (
            <tr id={this.props.rowid} class="longrow">
                <Key keyid={this.ids(this.props.start)} />
                <Key keyid={this.ids(this.props.start + 1)} />
                <Key keyid={this.ids(this.props.start + 2)} />
                <Key keyid={this.ids(this.props.start + 3)} />
                <Key keyid={this.ids(this.props.start + 4)} />
                <Key keyid={this.ids(this.props.start + 5)} />
                <Key keyid={this.ids(this.props.start + 6)} />
                <Key keyid={this.ids(this.props.start + 7)} />
                <Key keyid={this.ids(this.props.start + 8)} />
            </tr>
        )
    }
}

class Shortrow extends React.Component {
    ids = pos => {
        //return "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[pos];
        return "ZYXWVUTSRQPONMLKJIHGFEDCBA"[pos];
    }
    render() {
        return (
            <tr id={this.props.rowid} class="shortrow">
                <Key keyid={this.ids(this.props.start)} />
                <Key keyid={this.ids(this.props.start + 1)} />
                <Key keyid={this.ids(this.props.start + 2)} />
                <Key keyid={this.ids(this.props.start + 3)} />
                <Key keyid={this.ids(this.props.start + 4)} />
                <Key keyid={this.ids(this.props.start + 5)} />
                <Key keyid={this.ids(this.props.start + 6)} />
                <Key keyid={this.ids(this.props.start + 7)} />
            </tr>
        )
    }
}

class Keyboard extends React.Component {
    render() {
        return (
            <table>
                <Longrow rowid="1" start={0} />
                <Shortrow rowid="2" start={9} />
                <Longrow rowid="3" start={17} />
            </table>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.handleClick} id={this.props.id}>
                {this.props.text}
            </button>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id="game">
                <Keyboard />
                <Button handleClick={() => start()} id="start" text="Start" />
            </div>
        );
    };
}

ReactDOM.render(
    <Game />, 
    document.getElementById("root")
);
