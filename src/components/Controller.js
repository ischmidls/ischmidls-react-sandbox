import {Joystick} from 'react-joystick-component';
import {useState, useContext} from 'react';

export const Controller = () => {
    const [direction, setDirection] = useState("Stopped")

    const _handleMove = (data) => {
        setDirection(
            data.direction
        );
    }

    const _handleStop = () => {
        setDirection(
            "Stopped"
        );
    }

    return (
        <div className="controller">
            <Joystick 
                move={_handleMove} 
                stop={_handleStop}
                stickColor={"white"}
                baseColor={"white"}
            />
            <p>{direction}</p>
        </div>
    );
}