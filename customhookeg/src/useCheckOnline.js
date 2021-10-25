import React, { useState, useEffect } from "react"
import { useNetworkState } from "react-use"
function useCheckOnline() {
    const [online, setonline] = useState()
    const networkState = useNetworkState()
    useEffect(() => {
        setonline(networkState.online)
        return () => {

        }
    }, [networkState])
    return online
}
export default useCheckOnline