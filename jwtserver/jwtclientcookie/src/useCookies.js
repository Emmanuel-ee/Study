import Cookies from 'js-cookie';
import {useState,useEffect} from 'react'

function useCookies(cookiename){
    const [cookie, setcookie] = useState()
    useEffect(() => {
         setcookie(Cookies.get(cookiename))
        return () => {
            
        }
    })
    return cookie

}