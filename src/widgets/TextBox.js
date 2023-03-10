import React from "react";


class TextBox extends React.Component{

    title = this.props.title
    id = this.props.id
    classNameDecorator = this.props.decorator

    render(){
        return (
            <span className={"widget " + this.classNameDecorator}>
                <div className={"textTitle" + this.classNameDecorator}>
                    {this.title}
                </div>
            
                <input
                    type="text"
                    className="text-box widget"
                    onChange={e => {
                        this.props.handleTextBoxChange(this.id, e.target.value)
                    }}
                />

            </span>
        )
    }
}

export default TextBox;