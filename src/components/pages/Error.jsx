
import Image from '../Image'
import errorGif from '../../assets/error.gif'

const Error = () => {
  return (
   <Image className={'w-full h-screen'} src={errorGif}/>
  )
}

export default Error