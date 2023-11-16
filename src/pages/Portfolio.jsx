// import spacebook from '../assets/Spacebook_screenshot.png'
// import mealmagic from '../assets/MealMagic.png'
// import decoys from '../assets/Trippy_Pups_30.png'
// import instaclip from '../assets/insta-clip.jpg'
// import '../styles/Portfolio.css'

// export default function Portfolio() {

//     return (
//         <section id="portfolio">
//             <h3>My Work</h3>
//             <div class="projects">
//                 <section class="card" id="firstCard">
//                     <h4>Spacebook</h4>
//                     <a href="https://spacebook-socialmedia-app-9c15fa4095df.herokuapp.com/" target="_blank"><img src={spacebook} alt="spacebook" /></a>
//                 </section>
//                 <section class="card">
//                     <h4>Meal Magic</h4>
//                     <a href="https://mckit77.github.io/meal-magic/" target="_blank"><img src={mealmagic} alt="meal-magic" /></a>
//                 </section>
//                 <section class="card">
//                     <h4>InstaClip</h4>
//                     <a href="https://instaclip-5c26d78800f1.herokuapp.com/login" target="_blank"><img src={instaclip} alt='instaclip' /></a>
//                 </section>
//                 <section class="card">
//                     <h4>Project 4</h4>
//                     <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={decoys} /></a>
//                 </section>
//                 <section class="card">
//                     <h4>Project 5</h4>
//                     <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={decoys} /></a>
//                 </section>
//             </div>
//         </section>
//     );
// }

//new try
import spacebook from '../assets/Spacebook_screenshot.png'
import mealmagic from '../assets/MealMagic.png'
import decoys from '../assets/Trippy_Pups_30.png'
import instaclip from '../assets/insta-clip.jpg'
import '../styles/Portfolio.css'
import React, { useState, useEffect } from 'react';
import '../styles/Portfolio.css';

export default function Portfolio() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        // Fetch GitHub repositories using the GitHub API
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/MCKIT77/repos');
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="portfolio">
            <h3>My Projects</h3>
            <div className="projects">
                {/* Manually included projects */}
                <section className="card" id="firstCard">
                    <h4>Spacebook</h4>
                    <a href="https://spacebook-socialmedia-app-9c15fa4095df.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img src={spacebook} alt="spacebook" />
                    </a>
                </section>
                <section className="card">
                    <h4>Meal Magic</h4>
                    <a href="https://mckit77.github.io/meal-magic/" target="_blank" rel="noopener noreferrer">
                        <img src={mealmagic} alt="meal-magic" />
                    </a>
                </section>
                <section className="card">
                    <h4>InstaClip</h4>
                    <a href="https://instaclip-5c26d78800f1.herokuapp.com/login" target="_blank" rel="noopener noreferrer">
                        <img src={instaclip} alt='instaclip' />
                    </a>
                </section>
                {/* Dynamically fetched GitHub repositories */}
                <section id="dynamicRepos" className="card">
                    <h3>All Repos</h3>
                    {repos.map(repo => (
                        <section className="card" key={repo.id}>
                            <h4>{repo.name}</h4>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                <img src={`https://raw.githubusercontent.com/MCKIT77/${repo.name}/main/path/to/your/image/file.jpg`} alt={repo.name} />
                            </a>
                        </section>
                    ))}
                </section>
            </div>
        </section>
    );
}