export const addText = (text) => {
    return {
        type: 'ADD-TEXT',
        payload: text
    }
}

export const viewText = () => {
    return {
        type: 'VIEW-TEXT'
    }
}

export const deleteText = (id) => {
    return {
        type: 'DELETE-TEXT',
        payload: id
    }
}

