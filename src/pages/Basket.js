import React, { useState } from 'react';

const Basket = () => {
    const [count, setCount] = useState(10);

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={() => setCount(count + 2)}>
                Нажми на меня
            </button>
        </div>
    );
};

export default Basket;