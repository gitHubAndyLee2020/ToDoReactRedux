import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { addText,deleteText,viewText } from './actions'
import {useState} from 'react'
 
export default function AddText() {
    const [text,setText] = useState('')
    const list = useSelector(state => state.list)
    const view = useSelector(state => state.view)
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <h3 className='title'>To-Do Application Using React and Redux</h3>
            <input className='text-field' type='text' value={text} onChange={e => setText(e.target.value)}/>
            <button className='btn btn-add' onClick={() => {
                dispatch(addText(text))
                setText('')    
            }}>+</button>
            <div><button className='btn btn-view' onClick={() => dispatch(viewText())}>view</button></div>
            {view ? list.map(document => {
                return (
                    <div className='input'>
                        <div className='text'>{document.text}</div>
                        <button className='btn btn-del' onClick={() => dispatch(deleteText(document.id))}>delete</button>
                    </div>
            )}) : null}
        </div>
    )
}
