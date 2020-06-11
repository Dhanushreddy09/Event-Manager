import React, { Component } from 'react'
import TextInputGroup from '../layout/TextInputGroup'
import {addEvent} from '../../actions/eventActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {v1 as uuid} from 'uuid'
 class AddEvent extends Component {
     state={
         name:'',
         address:'',
         date:'',
         time:'',
         errors:{}
     }
     onChange=(event)=>{
         this.setState({[event.target.name]:event.target.value})
     }
     onSubmit=(e)=>{
         e.preventDefault();
         const {name,address,date,time}=this.state;
         if(name===''){
             this.setState({errors:{name:'Name is Required'}})
             return;
         }
         if(address===''){
            this.setState({errors:{address:'Address is Required'}})
            return;
        }
        if(date===''){
            this.setState({errors:{date:'Date is Required'}})
            return;
        }
        if(time===''){
            this.setState({errors:{time:'Time is Required'}})
            return;
        }
        const newEvent={
            name,
            address,
            date,
            time
        }
         
        this.props.addEvent(newEvent);

         this.setState({
             name:'',
             address:'',
             date:'',
             time:'',
             errors:{}
         })
         this.props.history.push('/')
     }
    render() {
        const {name,address,date,time,errors}=this.state;
        return (
            <div className="card mb-3">
                <div className="card-header text-white bg-dark">Add Event</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup 
                        name="name"
                        label="Name of Event"
                        placeholder="Enter Event name.. "
                        onChange={this.onChange}
                        value={name}
                        error={errors.name}
                        />
                        <TextInputGroup 
                        name="address"
                        label="Address of Event"
                        placeholder="Enter Event Address"
                        value={address}
                        onChange={this.onChange}
                        error={errors.address}
                        />
                        <TextInputGroup
                        name="date"
                        label="Date of Event"
                        placeholder="Enter Date of Event"
                        type="date"
                        value={date}
                        onChange={this.onChange}
                        error={errors.date}
                        />
                        <TextInputGroup
                        name="time"
                        label="Timing of Event"
                        placeholder="Enter Timing of Event"
                        type="time"
                        value={time}
                        onChange={this.onChange}
                        time={errors.time}
                        />
                        <input type="submit" value="Add Event" className="btn btn-success btn-block" />
                    </form>
                </div>
            </div>
        )
    }
}
AddEvent.prototypes={
    addEvent:PropTypes.func.isRequired
}
export default connect(null,{addEvent})(AddEvent);
