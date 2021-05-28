import { useEffect, useState } from "react"

export const useDebouncer = ( input: string = '' , time: number = 500 ) => {
    const [debouncedValue, setdebouncedValue] = useState(input)

    useEffect(() => {
        const timer = setTimeout(()=>{
            setdebouncedValue(input)
        },time)
        
        return () =>{
            clearTimeout(timer)
        }
    }, [input])

    return debouncedValue;
}
