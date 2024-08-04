import { useCallback } from "react"
import { CalculatorScreen } from "../components/CalculatorScreen"
import { Mic } from "lucide-react"

function ProCal() {

    const handaleInputChange = useCallback((equ: string, ans: number, err: boolean) => {
        // alert(equ + ans + err)   
    }, [])

    return (
        <main className="h-screen ">
            <div>
                <CalculatorScreen className="shadow-hello-light" equation="2+2" onEquationChange={handaleInputChange} />
                <Mic />
            </div>
            
        </main>
    )
}

export default ProCal