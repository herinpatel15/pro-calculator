import React, { useCallback, useState } from "react"
import { evaluate } from 'mathjs';

// Main sreen component
interface CalculatorScreenType extends React.HTMLAttributes<HTMLDivElement> {}

const CalculatorScreen = React.forwardRef<
    HTMLDivElement,
    CalculatorScreenType
>(({className, ...props}, ref) => {

    const [inputValue, setInputValue] = useState("")
    const [pera, setPera] = useState("")

    const [error, setError] = useState(false)

    const handalKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            try {
                setError(false)
                let res = evaluate(inputValue)
                setInputValue(res.toString())
            } catch(err) {
                setInputValue("")
                setError(true)
            }
        }
    }, [setInputValue, inputValue])

    const handaleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setInputValue(e.target.value)
        setPera(e.target.value)
    }, [setError, setInputValue, setPera])

    return (
        <div 
            className={`border-[0.2rem] ${error ? "border-[--err-color]" : "border-[--primary-color]"} rounded-3xl p-5 flex flex-col gap-3 w-[30vw] ${className}`}
            {...props}
            ref={ref}
        >
            <p className={`text-[--text-b-color] text-right`}>{pera}</p>
            <input
                type="text"
                className={`outline-none ${error ? "placeholder:text-[--err-color]" : ""} text-right w-[100%] text-3xl bg-[--bg-color]`}
                placeholder={error ? "Syntax Error" : "0"}
                name="input"
                value={inputValue}
                onChange={handaleChange}
                onKeyDown={handalKeyPress}
            />
        </div>
    )
})
CalculatorScreen.displayName = "CalculatorScreen"


export {
    CalculatorScreen
}