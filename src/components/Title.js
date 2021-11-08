import React, {Component} from 'react'; 


class SplitText extends Component {
    render() {
        return(
            // add animation to each character of text
            <span aria-label={this.props.copy} role={this.props.role}>
                {this.props.copy.split("").map(function(char, index) {
                    let style = {"animation-delay": (index/20)+"s"}
                    return <span    
                        aria-hidden="true"
                        key={index}
                        style={style}>
                        {char}
                        </span>;
                })}
            </span>
        )
    }
}

class Layout extends Component {
    render() {
        return(
            <h1 className="h1 home"><SplitText copy="jess peng" role="heading"/></h1>
        )
    }
}

export default Layout; 