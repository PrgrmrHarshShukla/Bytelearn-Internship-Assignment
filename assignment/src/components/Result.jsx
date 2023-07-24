import { useNavigate } from "react-router-dom"

function Result() {
   const navigate = useNavigate()

   function retry(e) {
      e.preventDefault()
      navigate("/")
   }

   return (
      <div className="flex flex-col items-center mt-[10vh]">
         <h1 className="text-4xl font-bold text-purple-700">🥳</h1>
         <h1 className="text-4xl font-bold text-purple-700">🎉 Yay 🎉</h1>
         <h1 className="text-4xl font-bold text-purple-700">That's Right</h1>
         <button className="h-[5vh] border-4 border-purple-700 font-bold rounded-[10px] px-4 text-center mt-[20vh]  hover:bg-purple-300 hover:border-2" onClick={retry}>PLAY AGAIN</button>
      </div>
   )
}

export default Result
