const NewsLetter = () => {

    return (
        <section className="news-letter section-wrapper flex column justify-center align-center">
            <h2 className='text-center'>Stay in the loop and never miss an update – sign up for our newsletter!</h2>
            <form action="POST" className='flex column width-full gap-2'>
                <input type="email" name="" id="" placeholder='name@email.com'/>
                <button type="submit">Subscribe</button>
            </form>
        </section>
    );
}

export default NewsLetter;