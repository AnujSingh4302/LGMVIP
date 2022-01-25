import React from 'react';
import './Home.css';

export default function Home({ getData }) {
    return (
        <section className="home">
            <div className="content">
                <p>Click the button below . <br/><button onClick={getData}>Get Users</button><br/></p>
            </div>
        </section>
    )
}
