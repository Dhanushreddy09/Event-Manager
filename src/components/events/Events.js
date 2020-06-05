import React, { Component } from 'react'
import Event from './Event'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getEvents} from '../../actions/eventActions'

 class Events extends Component {
    componentDidMount(){
        this.props.getEvents();
    }
    render() {
        const {events}=this.props;
        return (
            <React.Fragment>
                <h2>
                          {''}
                          <i className="fas fa-calendar text-dark"> Events{''}</i>
                      </h2>
               {events.map(event=>
               <Event event={event} key={event.id} />
               )
               } 
            </React.Fragment>
        )
    }
}
Events.prototypes={
    events:PropTypes.array.isRequired,
    getEvents:PropTypes.func.isRequired
}
const mapStateToProps=(state)=>({
events:state.event.events
})
export default connect(mapStateToProps,{getEvents})(Events);