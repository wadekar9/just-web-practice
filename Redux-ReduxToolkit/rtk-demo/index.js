const store = require('./app/store');
const cakeActions = require('./features/cake/cakeslice').cakeActions;
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log("intial ststae =--->",store.getState());

const unsubscribe = store.subscribe(() => {
    console.log("UPDATEDD STATE -->", store.getState());
})

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(1000));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(1000));

store.dispatch(fetchUsers());

// unsubscribe();