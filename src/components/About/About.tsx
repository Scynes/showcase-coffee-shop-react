const About = () => {

    return (
        <>
            <section className="about section-wrapper flex wrap justify-center">
                <div className="card flex column gap-2 justify-center">
                    <img src="/pouring-latte.jpg" alt="pouring coffee" />
                    <h2>Artistic Flair</h2>
                    <p>Our talented baristas craft eye-catching latte art with every pour.</p>
                </div>
                <div className="card flex column gap-2 justify-center">
                    <img src="/bakery.jpg" alt="pouring coffee" />
                    <h2>Sweet Delights</h2>
                    <p>Tempt yourself with our assorted bakery goodies, perfect alongside your latte.</p>
                </div>
            </section>
            <section className="about-hero relative grid place-items-center">
                <img src="/people.jpg" alt="" />
                <h2 className='quote absolute text-center'>The best lattes in town - don't miss the chance to try them!</h2>
            </section>
        </>
    );
}

export default About;