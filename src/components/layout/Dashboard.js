import React from 'react'
import Events from '../../components/events/Events'
import Sidebar from './Sidebar'


export default function Dashboard() {
    return (
        <div className="row">
           <div className="col-md-10">
               <div className="container">
          <Events />
           </div>
           </div>
           <div className="col-md-2">
               <Sidebar />
           </div>
        </div>
    )
}
