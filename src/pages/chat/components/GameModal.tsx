
import { useState } from 'react';

interface GameModalProps {
  onClose: () => void;
}

export default function GameModal({ onClose }: GameModalProps) {
  const [gameBoard, setGameBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (board: string[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleCellClick = (index: number) => {
    if (gameBoard[index] || winner) return;

    const newBoard = [...gameBoard];
    newBoard[index] = currentPlayer;
    setGameBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setGameBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Tic Tac Toe</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
          >
            <i className="ri-close-line text-gray-600"></i>
          </button>
        </div>

        <div className="text-center mb-4">
          {winner ? (
            <div className="text-lg font-semibold text-green-600">
              🎉 Player {winner} Wins!
            </div>
          ) : (
            <div className="text-lg font-semibold text-gray-700">
              Player {currentPlayer}'s Turn
            </div>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {gameBoard.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleCellClick(index)}
              className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors"
            >
              {cell}
            </button>
          ))}
        </div>

        <div className="flex space-x-3">
          <button
            onClick={resetGame}
            className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
          >
            New Game
          </button>
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
          >
            Close
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500 text-center">
          Playing with: Anonymous User
        </div>
      </div>
    </div>
  );
}
