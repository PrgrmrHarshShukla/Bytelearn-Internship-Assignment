# Bytelearn-Internship-Assignment

This is a Quiz game made using Reactm, TailwindCSS and other stack.
It has three routes (made using react-router-dom and navigated using UseNavigate hook from react-router-dom).

FIRST PAGE: 
> This page is the main page of the game.
> It contains two containers, one holds 5 numbers and the other has five input spaces.
> The numbers can be dragged and dropped into the 5 input spaces.
> The numbers are made "draggable".
> OnDragStart, dataTransfer is invoked with the innerHTML content as the data and type text.
> OnDrop, the incoming data replaces the "value" of the input into which it is dropped.
> Once all the input spaces are filled, "CHECK ANSWER" button is activated.
> If numbers are arranged in ascending order in downwards direction, "SECOND PAGE" is dispalyed.
> Otherwise, "THIRD PAGE" is displayed.

SECOND PAGE:
> This page is the "Right Answer" page.
> It has a "PLAY AGAIN" button that uses useNavigate hook from react-router-dom and takes user to refreshed FIRST PAGE.


THIRD PAGE:
> This page is the "Wrong Answer" page.
> It has a "RIGHT" button that uses useNavigate hook from react-router-dom and takes user to refreshed FIRST PAGE.
