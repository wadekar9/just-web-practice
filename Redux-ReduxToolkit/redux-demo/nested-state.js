const redux = require('redux');
const immer = require('immer');

const { legacy_createStore } = redux;
const { produce } = immer;

const intialState = {
    name : 'Nayan Wadekar',
    address : {
        street : '123 Ram Society',
        town : 'Udhna',
        city : 'Surat'
    },
    age : 900,
    hobbies : ['Sports','Music','Traveling']
}

const STREET_UPDATED = 'STREET_UPDATED';

const Reducer = (state=intialState, action)=>{
    switch(action.type){
        case STREET_UPDATED : 
            // return {
            //     ...state,
            //     address : {
            //         ...state.address,
            //         street : action.payload
            //     }
            // }

            return produce(state, (draft) => {
                draft.address.street = action.payload
            })

        default : return state;
    }
}

const Store = legacy_createStore(Reducer);

console.log('Intial stare--->',Store.getState());

const unsubscribe = Store.subscribe(() => { console.log("Current state --->", Store.getState()) });

Store.dispatch({
    type : STREET_UPDATED,
    payload : '8890, Laxman Society'
})

unsubscribe()