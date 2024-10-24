import React, { useState } from 'react'
import Cards from './Cards';

const GameCard = () => {

    // const [isFlipped, setIsFlipped] = useState(false);


    // Card data structure
    const cardData = [
        { id: 1, value: '🐶' },
        { id: 2, value: '🐱' },
        { id: 3, value: '🐭' },
        { id: 4, value: '🐹' },
        { id: 5, value: '🐰' },
        { id: 6, value: '🦊' },
        { id: 7, value: '🐻' },
        { id: 8, value: '🐼' }
    ];

    // Sample custom hook
    const useGameState = () => {
        const [cards, setCards] = useState([]);
        const [moves, setMoves] = useState(0);
        const [matches, setMatches] = useState(0);

        // Add game logic here

        return {
            cards,
            moves,
            matches,
            // Add necessary functions
        };
    };

    // Sample Card component structure
    const Card = (value, isFlipped) => {
        // Implement card display and flip animation
        console.log(value, isFlipped, "Values")
    };

    function flip(value, isFlip) {
        console.log(value, isFlip, "Values")

    }

    // Sample Game component structure
    const MemoryGame = () => {
        // Implement game logic here
    };
    return (
        <div>
            <div className='py-5 flex justify-center'>
                <div className='grid grid-cols-4 gap-10'>
                    {cardData.map(data => (
                        // <Cards key={data.id} id={data.value} />
                        <div  className='border p-10 shadow-xl flex justify-center items-center cursor-pointer' >
                            <div onClick={flip(data.value, true)}>{data.value}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default GameCard
