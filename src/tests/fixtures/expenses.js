import moment from 'moment'


export default  [{
    id: 1,
    description: 'flash',
    note: '',
    amount: 195,
    createdAt:0
},{
   id: 2,
    description: 'batman',
    note: '',
    amount: 195000,
    createdAt: moment(0).subtract(4,'days').valueOf()

}, {
    id: 3,
    description: 'superman',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4,'days').valueOf()
}]