import {Joystick} from 'react-joystick-component';
import {useState, useContext} from 'react';
import {useController} from '../hooks/useController';

export const Controller = () => {
    const { direction, handleMove, handleStop } = useController();
  
    return (
      <div className="controller">
        <Joystick
          move={handleMove}
          stop={handleStop}
          stickColor={'white'}
          baseColor={'white'}
        />
        <p>{direction}</p>
      </div>
    );
  };