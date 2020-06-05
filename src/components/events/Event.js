import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteEvent} from '../../actions/eventActions'

 class Event extends Component {
     onDeleteClick=(id)=>{
         this.props.deleteEvent(id);
     }
    render() {
        const {name,address,date,id,time}=this.props.event;
        return (
            <div className="container">
            <div className="card card-body bg-secondary text-white mb-3">
              <h5>{name} @{time}<i 
              className="fas fa-trash-alt btn btn-danger btn-sm" 
              style={{float:'right',cursor:'pointer'}}
              onClick={this.onDeleteClick.bind(this,id)}> Delete</i></h5>
        <h6>{address},{date}</h6>

            
       
        </div>
        </div>
        )
    }
}
Event.propTypes={
   event:PropTypes.object.isRequired,
   deleteEvent:PropTypes.func.isRequired
}
export default connect(null,{deleteEvent})(Event);
