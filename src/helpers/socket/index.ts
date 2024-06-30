import { io } from 'socket.io-client'

const connectSocketIO = () => {
  const socket = io("http://localhost:3001" as string)

  return socket
}

export default connectSocketIO
