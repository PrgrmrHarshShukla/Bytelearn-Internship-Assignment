import { useNavigate } from "react-router-dom"

function Failure() {
   const navigate = useNavigate()

   function retry(e) {
      e.preventDefault()
      navigate("/")
   }

   return (
      <div className="flex flex-col items-center mt-[10vh]">
         <h1 className="text-4xl font-bold text-blue-700">OOPS!</h1>
         <h1 className="text-4xl font-bold text-blue-700 mb-[10vh]">Something was wrong!</h1>
         <h1 className="text-4xl font-bold text-purple-700">You were almost there</h1>
         <h1 className="text-4xl font-bold text-purple-700">Try again</h1>

         <button className="h-[5vh] border-4 border-purple-700 font-bold rounded-[10px] px-4 text-center mt-[15vh] hover:bg-purple-300 hover:border-2" onClick={retry}>RETRY</button>
      </div>
   )
}

export default Failure