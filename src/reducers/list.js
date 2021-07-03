const documentize = (documents,inputText) => {
    if (documents.length > 0) {
        let lastDocument = documents[documents.length-1]
        let lastId = lastDocument.id 
        return {id:lastId+1,text:inputText}
    } else {
        return {id:1,text:inputText}
    }
}

const listReducer = (state=[],action) => {
    switch (action.type) {
        case 'ADD-TEXT':
            let newState = state
            newState.push(documentize(state,action.payload))
            return newState
        case 'DELETE-TEXT':
            return state.filter(document => document.id !== action.payload)
        default:
            return state 
    }
}

export default listReducer 