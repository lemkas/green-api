import { Chat } from '../Chat/Chat'
import { ChatList } from '../ChatList/ChatList'
import './Layout.css'

export const Layout = () => {
  return (
    <div className='layout'>
        <ChatList/>
        <Chat />
    </div>
  )
}
