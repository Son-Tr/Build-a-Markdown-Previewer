export const UPDATE_MARKDOWN ="UPDATE_MARKDOWN";

//  funcion will update the content
export const uploadMarkdown =(markdown)=>({
    type:UPDATE_MARKDOWN,
    markdown:markdown,
 })

const initialState={
    markdown: `# Heading 1
## Heading 2
[Link](https://www.example.com)
\`inline code\`
\`\`\`
code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bold text**`};

let markdownReducer =(state= initialState, {type,markdown})=>{
    switch(type){
        case UPDATE_MARKDOWN:
            return{
                ...state,
                markdown:markdown,
            }
        default:
            return state;
    }
}

export default markdownReducer;