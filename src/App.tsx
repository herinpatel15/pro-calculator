// import "regenerator-runtime/runtime.js"
import { useEffect, useState } from "react"
// import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition"
import Home from "./pages/Home"

type Recode = {
  n1: number,
  n2: number,
  ans: number
}

function App() {

  // const [msg, setMsg] = useState('')
  // const [recode, setRecode] = useState<Recode[]>([])
  // const [total, setTotal] = useState(0)
  // const [init, setInit] = useState('')

  // const commands  = [
  //   {
  //     "command": "* or *",
  //     callback: (num1: string, num2: string) => {
  //       let cleanedNum1 = cleanInput(num1);
  //       let cleanedNum2 = cleanInput(num2);
  //       let n1: number = parseInt(cleanedNum1)
  //       let n2: number = parseInt(cleanedNum2)
  //       let ans = n1 * n2
  //       setMsg("")
  //       setMsg(`${n1} * ${n2} = ${ans}`)
  //       setRecode([...recode, {n1: n1, n2: n2, ans: ans}])
  //       setInit("")
  //     }
  //   }
  // ]

  // const start = () => SpeechRecognition.startListening({continuous: true, language: 'en-IN'})

  // const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition({commands})

  // if (!browserSupportsSpeechRecognition) return null

  // const handleDelete = (index: number) => {
  //   setRecode(recode.filter((_, i) => i !== index));
  // };

  // const calculateSum = () => {
  //   let sum = recode.reduce((sum, record) => sum + record.ans, 0);
  //   setTotal(sum);
  // };

  // const cleanInput = (input: string) => {
  //   return input.replace(':', '');
  // };

  // useEffect(() => {
  //   // setMsg('')
  //   // setInit(transcript)
  //   start()
  //   calculateSum()
  // }, [start, calculateSum])

  return (
    <main className="flex items-center justify-center flex-col h-screen p-10">
      {/* <h1>{`Total : ${total}`}</h1>
      <h1 className="text-2x text-blue-600">{msg}</h1>
      <textarea className="text-black w-96 h-72" name="area" id="area" value={transcript}></textarea>
      <ul className="flex items-center flex-col-reverse">
        {
          recode.map((val, index) => (
            <li key={val.n1}>
              <div className="flex items-center justify-between gap-5">
                <p>{val.n1} * {val.n2} = {val.ans}</p>
                <button className="text-red-600" onClick={() => handleDelete(index)}>delete</button>
              </div>
            </li>
          ))
        }
      </ul> */}
      <Home />
    </main>
  )
}
export default App
