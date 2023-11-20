import { Editor } from '@monaco-editor/react'
import React from 'react'

const CodeEditor = () => {
  return (
    <div className='flex flex-col items-center col-span-1 row-span-6 bg-white p-5 rounded-md shadow-md'>
      <Editor
        height= {`99%`}
        width={`98%`}
        defaultLanguage='javascript'
        defaultValue="// write code here"
        theme='vs-light'
      />
    </div>
  )
}

export default CodeEditor