import React from "react"
import "./list.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
class Listitems extends React.Component{
        constructor(){
            super()
            this.state={
                edit:true,
                index: ''
            }
            this.handleEdit=this.handleEdit.bind(this)
        }
    
       handleEdit(item, index) {
           this.setState({
               edit:false,
               curr: item.text,
               index
              })
       }
       
       

       handleChange = e => {
           this.setState({
               curr: e.target.value
           })
       }

       handleSave = (index,text) => {
            this.props.handleStateData(index,text)
            this.setState({edit:true})
       }

      
    render(){
        
        var editStyle={}
        if(this.state.edit){
            editStyle.display="none"

        }
    return(
        <div>
        <ul>
            {this.props.items.map((item,index)=>{
               return(
                  
               <li className="list" key={index}>
                    <div className="p">
                       <input className="a"
                        name={item.index}
                        value={item.text}
                        disabled
                       
                   /> 
                       <FontAwesomeIcon className="fa" onClick={() =>this.props.handleClick(item.key)} icon="trash"/>
                       <button className="but"onClick={() => this.handleEdit(item, index)}>Edit</button>
               </div>
                  
               </li>
            
               )
               
         })
        }
        </ul>
        <input className="ab"
                        type="text"
                       value={this.state.curr}
                          style={editStyle}
                         onChange={(e) =>this.handleChange(e)}/>
            <button className="b"
                onClick={() => this.handleSave(this.state.index, this.state.curr)}
                style={editStyle}
            >
                Save
            </button>
      
       </div>
    )
}
}

export default Listitems