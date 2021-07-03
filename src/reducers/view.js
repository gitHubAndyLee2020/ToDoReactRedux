const viewReducer = (state=false,action) => {
    switch (action.type) {
        case 'VIEW-TEXT':
            return !state 
        default:
            return state 
    }
}

export default viewReducer 