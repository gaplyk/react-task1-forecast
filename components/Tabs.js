import React from 'react';

class Tabs extends React.Component {
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        this.props.select(e.target.innerText)
    }

    render() {
        return (
            <ul>
                {this.props.list.map(function(item){
                    return <li key={item} onClick={this.handleClick}>{item}</li>;
                }.bind(this))}
            </ul>
        )
    }
}

Tabs.defaultProps = {
  list: []
};

Tabs.propTypes = {
    list: React.PropTypes.arrayOf(React.PropTypes.string),
    select: React.PropTypes.func
};

export default Tabs