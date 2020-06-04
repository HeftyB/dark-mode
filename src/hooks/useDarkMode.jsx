import { useEffect } from 'react'
import useLocalStorage from "./useLocalSorage";

export default function useDarkMode() {

    const [ someValue, setsomeValue ] = useLocalStorage("your key here")

    useEffect( () => {
        let body = document.querySelector("body");
        someValue ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
    }, [someValue])

    return [ someValue, setsomeValue ]
}
