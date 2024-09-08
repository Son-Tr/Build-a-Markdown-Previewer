import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uploadMarkdown } from '../redux/markdownReducer';

 function Editor() {
    const dispatch =useDispatch();// Get the dispatch function
    const markdown = useSelector((state)=>state.markdown) // get value markdown from sat

    const handleChange =(e)=>{
      dispatch(uploadMarkdown(e.target.value)) // dispatch value to state.
    }

  return (
    <div className="container">
      <textarea 
        id="editor" 
        value={markdown} 
        onChange={handleChange} 
      />
    </div>
  )
}
export default Editor;
