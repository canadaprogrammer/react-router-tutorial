import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => {
                history.push('/about/javascript')
            }}>Move by using javascript</button>
        </div>
    )
}

export default Home;