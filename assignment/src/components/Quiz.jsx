import {useNavigate} from "react-router-dom"

function Quiz() {
   const navigate = useNavigate()

   const allowDrop = (e) => {
      e.preventDefault()
      // console.log("allowDrop");
   }
   const dragEnter = (e) => {
      // console.log("dragEnter");
      e.preventDefault()
   }

   const drag = (e) => {
      // console.log("dragged");
      let data = e.dataTransfer.setData("text", e.target.innerHTML)
   }

   const drop = (e) => {
      e.preventDefault()
      // console.log("drop");
      let data = e.dataTransfer.getData("text")
      e.target.value = data
   }

   function funcDisable(e) {
      e.preventDefault()

      let i1 = document.getElementById("input1").value
      let i2 = document.getElementById("input2").value
      let i3 = document.getElementById("input3").value
      let i4 = document.getElementById("input4").value
      let i5=document.getElementById("input5").value      
      
      if(i1!="" && i2!="" && i3!="" && i4!="" && i5!="") {
         i1 = Number.parseInt(i1)
         i2 = Number.parseInt(i2)
         i3 = Number.parseInt(i3)
         i4 = Number.parseInt(i4)
         i5 = Number.parseInt(i5)
         if(i1<i2 && i2<i3 && i3<i4 && i4<i5) {
            navigate("/right")
         }
         else {
            navigate("/wrong")
         }
      }
      else {
         alert("Please fill all the values.")
      }
   }


   return (
      <div className="flex flex-col w-screen h-[90vh]  justify-center items-center gap-[12vh]">

         <div  className="flex flex-col w-screen h-[10vh] mt-[10vh] justify-center items-center">
            <h1 className="text-4xl font-bold text-purple-700">Quiz App</h1>
            <h1 className="text-lg max-w-[60vw] mt-4 font-semibold text-blue-700 text-center">Drag the numbers from the container on the left and drop into the container on the right in ascending order in downwards direction.</h1>
         </div>

         <div className="flex flex-row w-screen h-[55vh] justify-center items-center gap-[20vw]">

            
            <div className="flex flex-col gap-[1vh]  border-4 border-dashed border-blue-700 hover:border-solid  text-center p-4 rounded-[10px] ">

               
               <span 
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop} 
                  id="num1" 
                  draggable={true} 
                  className="hover:border-purple-700 border-2 text-center text-4xl p-4 font-semibold rounded-[10px] cursor-pointer">
                     {Math.floor(Math.random()*200)}
               </span>
               <span 
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop} 
                  id="num2" 
                  draggable={true} 
                  className="hover:border-purple-700 border-2 text-center text-4xl p-4 font-semibold rounded-[10px] cursor-pointer">
                     {Math.floor(Math.random()*200)}
               </span>
               <span 
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop} 
                  id="num3" 
                  draggable={true} 
                  className="hover:border-purple-700 border-2 text-center text-4xl p-4 font-semibold rounded-[10px] cursor-pointer">
                     {Math.floor(Math.random()*200)}
               </span>
               <span 
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop} 
                  id="num4" 
                  draggable={true} 
                  className="hover:border-purple-700 border-2 text-center text-4xl p-4 font-semibold rounded-[10px] cursor-pointer">
                     {Math.floor(Math.random()*200)}
               </span>
               <span 
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop} 
                  id="num5" 
                  draggable={true} 
                  className="hover:border-purple-700 border-2 text-center text-4xl p-4 font-semibold rounded-[10px] cursor-pointer">
                     {Math.floor(Math.random()*200)}
               </span>

            </div>



            <div className="flex flex-col gap-[1vh]  border-4 border-dashed hover:border-solid border-blue-700 text-center p-4 rounded-[10px] ">
               <input 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop}
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  draggable={true}
                  id="input1" 
                  className="h-[10vh] text-4xl max-w-[132px] w-auto text-center hover:border-purple-700 border-2 p-4 font-semibold rounded-[10px] cursor-pointer" 
                  placeholder="DROP" 
               />
               <input 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop}
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  draggable={true}
                  id="input2" 
                  className="h-[10vh] text-4xl max-w-[132px] w-auto text-center hover:border-purple-700 border-2 p-4 font-semibold rounded-[10px] cursor-pointer" 
                  placeholder="DROP" 
               />
               <input 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop}
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  draggable={true}
                  id="input3" 
                  className="h-[10vh] text-4xl max-w-[132px] w-auto text-center hover:border-purple-700 border-2 p-4 font-semibold rounded-[10px] cursor-pointer" 
                  placeholder="DROP" 
               />
               <input 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop}
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  draggable={true}
                  id="input4" 
                  className="h-[10vh] text-4xl max-w-[132px] w-auto text-center hover:border-purple-700 border-2 p-4 font-semibold rounded-[10px] cursor-pointer" 
                  placeholder="DROP" 
               />
               <input 
                  onDragEnter={dragEnter} 
                  onDragOver={allowDrop} 
                  onDrop={drop}
                  onDragEnd={allowDrop} 
                  onDragStart={drag} 
                  draggable={true}
                  id="input5" 
                  className="h-[10vh] text-4xl max-w-[132px] w-auto text-center hover:border-purple-700 border-2 p-4 font-semibold rounded-[10px] cursor-pointer" 
                  placeholder="DROP" 
               />
               
            </div>
         
         </div>

         <button className="h-[5vh] border-4 border-purple-700 font-bold rounded-[10px] px-4 text-center -mt-[5vh]  hover:bg-purple-300 hover:border-l-2 hover:border-r-2 " onClick={funcDisable}>CHECK ANSWER</button>



      </div>
   )
}

export default Quiz