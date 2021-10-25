import { useNetworkState} from 'react-use'
import React,{useState,useEffect} from 'react'
const useCheckNetwork=()=>{
 
    const [network, setnetwork] = useState(null)
    const networkhook = useNetworkState()    

    useEffect(() => {
            setnetwork(networkhook.online)
      return () => {
          
      }
  },[networkhook.online])
  return network

}

export default useCheckNetwork