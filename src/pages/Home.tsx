import { Link } from "react-router-dom";
import { CalculatorScreen } from "../components/CalculatorScreen";

function Home() {

    return (
        <main className="flex flex-col items-center justify-start h-screen gap-20">
            <h1 className="text-6xl font-bold">Calc .Pro</h1>
            <CalculatorScreen className={`shadow-hello-light`} />
            <Link to={"/pro-calculation"} className="text-[--primary-color] text-xl underline animate-highlight p-3 rounded-lg">Level Up Your Calcutation !</Link>
        </main>
    );
}

export default Home