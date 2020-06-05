import {GET_EVENTS,DELETE_EVENT,ADD_EVENT} from '../actions/types'

const initialState={events:[{
    id:'1',
    name:'RRR',
    address:'Mumbai',
    date:'12-06-2020',
    time:'6:30'
},
{
    id:'2',
    name:'KGF',
    address:'Banglore',
    date:'14-08-2020',
    time:'9:00'
},
{
    id:'3',
    name:'HIT',
    address:'Hyderabad',
    date:'18-09-2020',
    time:'8:20'
}
]}

export default function(state=initialState,action){
    switch(action.type){
        case GET_EVENTS:
            return{
                ...state
            }
            case DELETE_EVENT:
                return{
                    ...state,
                    events:state.events.filter(event=>event.id!==action.payload)
                }
                case ADD_EVENT:
                    return{
                        ...state,
                        events:[action.payload,...state.events]
                    }
        default:
            return state;
    }
}