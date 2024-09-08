
import React from 'react';
import { useSelector } from 'react-redux';
import { marked } from 'marked';


function Previewer() {
    const markdown = useSelector((state) => state.markdown);
    
    marked.use({
        breaks:true //allow apply <br/> when user insert line break 
      })
    return (
        <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        >
        </div>
    )
}


export default Previewer