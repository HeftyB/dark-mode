import { useState } from 'react'

export default function useLocalSorage(key, initialValue) {

    const [ storedValue, setstoredValue ] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setstoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [ storedValue, setValue ]
}
