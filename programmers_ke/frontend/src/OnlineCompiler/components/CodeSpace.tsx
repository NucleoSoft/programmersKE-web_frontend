import { Editor } from '@monaco-editor/react'
import React from 'react'

const CodeSpace = () => {
  return (
    <div className='p-2 my-auto w-[95%] h-[98%] grid grid-flow-col ml-16 rounded-md gap-3'>
      <CodeEditor/>
      <CodeRun/>
      <CodeOutput/>
    </div>
  
  )
}


const CodeEditor = () => {
  return (
    <div className='flex flex-col items-center col-span-1 row-span-1 bg-white p-5 rounded-md'>
      <Editor
        height= {`97%`}
        width={`97%`}
        defaultLanguage='javascript'
        defaultValue="// write code here"
        theme='vs-light'
      />
    </div>
  )
}

const CodeRun = () => {
  return (
    <div className='col-span-1 bg-white row-span-5 rounded-md'>
      CodeRun
    </div>
  )
}

const CodeOutput= () => {
  return (
    <div className='col-span-12 row-span-6 bg-white rounded-md'>
      CodeOutput
    </div>
  )
}

export default CodeSpace