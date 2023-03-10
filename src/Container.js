import logo from './logo.svg';
import notFound from './images/notFound.png'
import patribotsLogo from './images/patribotsLogo.png'
import './App.css';

import CheckBox from './widgets/CheckBox';
import TextBox from './widgets/TextBox'
import TextBoxLong from './widgets/TextBoxLong'
import Counter from './widgets/Counter'
import Submit from './widgets/Submit'
import Dropdown from './widgets/Dropdown';

import {v4 as uuidv4} from "uuid"
import React from 'react';

class Container extends React.Component{

  scriptUrl = " https://script.google.com/macros/s/AKfycbz1Q-xLuk8w2mi7Edy06wgCHmsskpAkMMLso09RboigvgdegC7LOf0uNQAPYtvz-jNH/exec"

  state = {
    items: [
      {
        id: uuidv4(),
        title: "Name",
        type: "textbox",
        value: "",
        decorator: "name"
      },
      
      {
        id: uuidv4(),
        title: "Match Number",
        type: "textbox",
        value: "",
        decorator: "matchNumber"
      },
      {
        id: uuidv4(),
        title: "Team Number",
        type: "textbox",
        value: "",
        decorator: "teamNumber"
      },
      {
        id: uuidv4(),
        title: "AUTO: ",
        type: "label",
        decorator: "label1"
      },
      
      // {
      //   id: uuidv4(),
      //   title: "Test checkbox 2",
      //   value: false,
      //   type: "checkbox",
      //   decorator: "style1"
      // },
      {
        id: uuidv4(),
        title: "Upper Cone",
        value: 0,
        type: "counter",
        decorator: "cone"
      },
      {
        id: uuidv4(),
        title: "Middle Cone",
        value: 0,
        type: "counter",
        decorator: "cone"
      },
      {
        id: uuidv4(),
        title: "Lower Cone",
        value: 0,
        type: "counter",
        decorator: "cone"
      },
      {id: uuidv4(),
      tittle: "Fumbles",
      value: 0,
      type: "counter",
      },
      {
        id: uuidv4(),
        title: "Upper Cube",
        value: 0,
        type: "counter",
        decorator: "cube"
      },
      {
        id: uuidv4(),
        title: "Middle Cube",
        value: 0,
        type: "counter",
        decorator: "cube"
      },
      {
        id: uuidv4(),
        title: "Lower Cube",
        value: 0,
        type: "counter",
        decorator: "cube"
      },
      {
        id: uuidv4(),
        title: "Parking",
        type: "dropdown",
        decorator: "parking1",
        items: [
          {
            id: uuidv4(),        
            title: "engaged",
          },
          {
            id: uuidv4(),        
            title: "docked",
          },
          {
            id: uuidv4(),        
            title: "left community",
          },
          {
            id: uuidv4(),        
            title: "didn't move",
          },
        ],
        value: 1,
      },
      
      {
        id: uuidv4(),
        title: "TELEOP: ",
        type: "label",
        decorator: "label2"
      },
      {
        id: uuidv4(),
        title: "Upper Cone",
        value: 0,
        type: "counter",
        decorator: "cone"
      },
      {
        id: uuidv4(),
        title: "Middle Cone",
        value: 0,
        type: "counter",
        decorator: "cone"
      },
      {
        id: uuidv4(),
        title: "Lower Cone",
        value: 0,
        type: "counter",
        decorator: "cone"
      },
      {
        id: uuidv4(),
        title: "Upper Cube",
        value: 0,
        type: "counter",
        decorator: "cube"
      },
      {
        id: uuidv4(),
        title: "Middle Cube",
        value: 0,
        type: "counter",
        decorator: "cube"
      },
      {
        id: uuidv4(),
        title: "Lower Cube",
        value: 0,
        type: "counter",
        decorator: "cube"
      },
      {
        id: uuidv4(),
        title: "Fumble Count",
        value: 0,
        type: "counter",
        decorator: "fumble"
      },
      {
        id: uuidv4(),
        title: "Parking",
        type: "dropdown",
        decorator: "parking2",
        items: [
          {
            id: uuidv4(),        
            title: "engaged",
          },
          {
            id: uuidv4(),        
            title: "docked",
          },
          {
            id: uuidv4(), 
            title: "neither",
          },
        ],
        value: 1,
      },
      {
        id: uuidv4(),
        title: "Did They Defend The Majority of The Match?",
        value: false,
        type: "checkbox",
        decorator: "checkbox1"
      },
      
      {
        id: uuidv4(),
        title: "Additional Comments",
        type: "textbox-long",
        value: "",
        decorator: "comments"
      },
      {
        id: uuidv4(),
        title: "Submit",
        type: "submit",
        decorator: "submit"
      },
      
    ],

    
  }

  handleDropdownChange = (event) => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === event.target.id){
          item.value = event.target.value
        }
        return item
      })},
    )
    
  }
  
  gatherData = () => {
    var arr = []

    for (var i = 0; i < this.state.items.length; i++){
      if (this.state.items[i].type !== "submit"
          && this.state.items[i].type !== "label"
          && this.state.items[i].type !== "image"
          && this.state.items[i].type !== "header"){

            arr.push([this.state.items[i].title, this.state.items[i].value])

          }
    }

    return arr
  }

  increaseCounter = (id) => {
    this.setState({
        items: this.state.items.map(item => {
          if (item.id === id) {
            item.value = item.value + 1
          }
          return item
        })
    })
  }

  decreaseCounter = (id) => {
    this.setState({
        items: this.state.items.map(item => {
          // no go below 0 !
          if (item.id === id && item.value > 0) {
            item.value = item.value - 1
          }
          return item
        })
    })
  }

  getIDFromTitle = (title) => {
    this.state.items.filter(item => {
      if (item.title === title){
        return item.id
      }
    })
  }

  handleCheckBoxChange = (id) => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.value = !item.value
        }
        return item
      })
    })
  }

  handleTextBoxChange = (id, value) => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.value = value
        }
        return item
      })
    })
  }

  handleFormSubmit = (e) =>{
    e.preventDefault()

    var data = this.gatherData()

    var formDataObject = new FormData()

    for (var i = 0; i < data.length; i++){
      formDataObject.append(data[i][0], data[i][1])
    }

    console.log(formDataObject)

    fetch(this.scriptUrl, {method: 'POST', body: formDataObject})
    .catch(err => console.log(err))
    window.location.reload();
  }


  render () {
    return (
      <ul className="container">
        {this.state.items.map(item => {
          if (item.type === "checkbox") {
            return (
              <div>
                <CheckBox
                  className="checkbox widget"
                  id={item.id}
                  title={item.title}
                  value={item.value}
                  handleCheckBoxChange={this.handleCheckBoxChange}
                  decorator={item.decorator}
                />
              </div>
             ) 
          }
          else if (item.type === "textbox"){
            return (
              <TextBox
                className="textbox widget"
                id={item.id}
                title={item.title}
                handleTextBoxChange={this.handleTextBoxChange}
                value={item.value}
                decorator={item.decorator}
              />
            )
          }
          else if (item.type === "textbox-long"){
            return (
              <TextBoxLong
                className="textbox-long widget"
                id={item.id}
                title={item.title}
                handleTextBoxChange={this.handleTextBoxChange}
                value={item.value}
                decorator={item.decorator}
              />
            )
          }
          else if (item.type === "counter"){
            return (
              <Counter
                className="counter widget"
                id={item.id}
                title={item.title}
                value={item.value}
                increaseCounter={this.increaseCounter}
                decreaseCounter={this.decreaseCounter}
                decorator={item.decorator}
              />
            )
          }
          else if (item.type === "submit"){
            return (
              <Submit
                id={item.id}
                title={item.title}
                handleFormSubmit={this.handleFormSubmit}
                decorator={item.decorator}
              />              
            )
            
          }
          else if (item.type === "dropdown"){
            return (
              <Dropdown
                id={item.id}
                title={item.title}
                data={item.data}
                items={item.items}
                handleDropdownChange={this.handleDropdownChange}
                value={item.value}
                decorator={item.decorator}
              />              
            )
          }
          else if (item.type === "label"){
            return (
              <div className={'label widget ' + item.decorator}>
                {item.title}
              </div>
            )
          }
          else if (item.type === "header"){
            return (
              <h1 className={'header widget ' + item.decorator}>
                {item.title}
              </h1>
            )
          }
          else if (item.type === "image"){
            return (
              <img
                src = {item.src}
                alt = {notFound}
                className = {'image widget' + item.decorator}
              />
            )
          }
        })
        }
      </ul>
    );
  }
}

export default Container;
