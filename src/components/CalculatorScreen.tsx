import React, { useCallback, useEffect, useRef, useState } from "react"
import { evaluate } from 'mathjs';

// Main sreen component
interface CalculatorScreenProps {
    onEquationChange?: (equation: string, ans: number, err: boolean) => void,
    equation?: string
}

type CalculatorScreenType = CalculatorScreenProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>

const CalculatorScreen = React.forwardRef<
    HTMLDivElement,
    CalculatorScreenType
>(({className, onEquationChange, ...props}, ref) => {

    const [inputValue, setInputValue] = useState(props.equation || "")
    const [pera, setPera] = useState(props.equation || "")
    const [equation, setEquation] = useState(props.equation || "")

    const [error, setError] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null);

    const handalKeyPress = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            try {
                setError(false)
                let res = evaluate(inputValue)
                setInputValue(res.toString())
                if (onEquationChange) {
                    onEquationChange(equation, res, false)
                }
            } catch(err) {
                setInputValue("")
                setError(true)
                if (onEquationChange) {
                    onEquationChange(equation, 0, true)
                }
            }
        }
    }, [setInputValue, inputValue, onEquationChange])

    const handaleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setInputValue(e.target.value)
        setPera(e.target.value)
        setEquation(e.target.value)
    }, [setError, setInputValue, setPera, setEquation])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

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
                ref={inputRef}
            />
        </div>
    )
})
CalculatorScreen.displayName = "CalculatorScreen"


export {
    CalculatorScreen
}