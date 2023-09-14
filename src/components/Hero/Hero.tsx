const Hero = () => {

    return (
        <section className='hero grid place-items-center relative section-wrapper'>
            <div className="backdrop-container">
                <div className='shape round-tr' />
                <div className='shape round-br round-bl' />
                <div className='shape round-tl' />
                <div className='shape round-bl' />
            </div>
            <h1 className='absolute text-center'>Unleash your taste buds with our signature lattes.</h1>
        </section>
    );
}

export default Hero;