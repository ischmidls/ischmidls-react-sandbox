import { useState } from 'react';

const useController = () => {
  const [direction, setDirection] = useState('Stopped');

  const handleMove = (data) => {
    const directionMap = {
      FORWARD: 'moveForward',
      BACKWARD: 'moveBackward',
      RIGHT: 'moveRight',
      LEFT: 'moveLeft',
    };

    const newDirection = directionMap[data.direction] || 'Stopped';
    setDirection(newDirection);
  };

  const handleStop = () => {
    setDirection('Stopped');
  };

  return { direction, handleMove, handleStop };
};

export default useController;
