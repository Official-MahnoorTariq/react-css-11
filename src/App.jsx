import Board from "./components/Board";
import Snake from "./components/Snake";
import Title from "./components/Title";

export default function App(){
  return(
    <>
    <Title/>
    <div class="board-container">
<Board/>
<Snake/>
    </div>
    </>
  );

}