import spacebook from '../assets/Spacebook_screenshot.png'
import mealmagic from '../assets/MealMagic.png'
import decoys from '../assets/Trippy_Pups_30.png'
import '../styles/Portfolio.css'

export default function Portfolio() {

    return (
        <section id="portfolio">
            <h3>My Work</h3>
            <div class="projects">
                <section class="card" id="firstCard">
                    <h4>Spacebook</h4>
                    <a href="https://spacebook-socialmedia-app-9c15fa4095df.herokuapp.com/" target="_blank"><img src={spacebook} alt="spacebook" /></a>
                </section>
                <section class="card">
                    <h4>Meal Magic</h4>
                    <a href="https://mckit77.github.io/meal-magic/" target="_blank"><img src={mealmagic} alt="meal-magic" /></a>
                </section>
                <section class="card">
                    <h4>Project 3</h4>
                    <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={decoys} /></a>
                </section>
                <section class="card">
                    <h4>Project 4</h4>
                    <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={decoys} /></a>
                </section>
                <section class="card">
                    <h4>Project 5</h4>
                    <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={decoys} /></a>
                </section>
            </div>
        </section>
    );
}