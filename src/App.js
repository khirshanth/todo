import React from 'react';
import Listitems from './Listitems';
import  "./style.css"
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash)
class App extends React.Component{
  constructor(props){
    super(props)
       this.state={
         items:[],
         
         currentItems:{
         text:"",
        key:"",
        
      }
      
    }
    this.handleInput=this.handleInput.bind(this)
    this.addItem=this.addItem.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.changeStateData = this.changeStateData.bind(this)
    this.clearAll=this.clearAll.bind(this)
  }
  handleInput(event){
    this.setState({currentItems:{
      text:event.target.value,
      key:Date.now()
    }
    })

  }
  addItem(e){
       e.preventDefault()
       const newItem=this.state.currentItems
       const newItems=[...this.state.items,newItem]
       if(this.state.currentItems.text === ""){
          
       }else{
       this.setState({
         items:newItems,
         currentItems:{
         text:"",
         key:"",
          }
        
       })
       } 
  }
  handleClick(key){
        const items=this.state.items.filter(item => item.key !== key)
        this.setState({items:items})
  }

  changeStateData(index, text){
    const item = this.state.items[index]
    item.text=text
    const items = this.state.items.filter((index, i) => i !== index)
    items[index]=item
    this.setState({
      items
    })
    console.log(items)  
  }
 
    clearAll(e){
      this.setState({
        items:[]
      })
      
    }
   
             
  render(){
    return(
      <div className="App">
         <input id="form"
         placeholder="ADD ITEMS"
         value={this.state.currentItems.text}
         type="text"
         onChange={(e) => this.handleInput(e)}
        />
        <button id="but" onClick={this.addItem}>
         ADD
        </button>
          <div>
           
            <Listitems  items={this.state.items} 
          handleClick={this.handleClick}
          handleEdit={this.handleEdit}
          handleStateData={this.changeStateData}
          />
           
        
       </div>
           <button className="butt" onClick={this.clearAll}>CLEAR ALL</button>
      
         
      </div>
    )
  }
}



export default App;
