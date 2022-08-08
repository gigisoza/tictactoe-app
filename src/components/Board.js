import React from "react";

const Board = React.memo(
    () => {
        return <div>
            <h3>tictactoe</h3>
        </div>
    },
);

Board.displayName  = 'Board';

export default Board;