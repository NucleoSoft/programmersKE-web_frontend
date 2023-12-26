import CodeEditor from './CodeEditor'
import CodeOutput from './CodeOutput'
import React from 'react'

const CodeSpace = () => {
  return (
    <div className='p-5 my-auto w-[95%] h-[98%] grid grid-flow-col ml-16 rounded-md gap-3'>
      <CodeEditor />
      <CodeOutput />
    </div>

  )
}
export default CodeSpace