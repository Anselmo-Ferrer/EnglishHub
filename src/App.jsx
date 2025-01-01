import { useState } from 'react'
import Chat from './components/chat'
import Table from './components/table'
import Translate from './components/translate'
import EditableTable from './components/editableTable'
import ChatGPT from './components/editableTable'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-black flex'>
      <div className='w-3/5 h-full p-10'>
        <Chat />
      </div>
      <div className='w-2/5 h-full p-10 gap-4 flex flex-col justify-between'>
        < Table />
        < Translate />
      </div>
    </div>
  )
}