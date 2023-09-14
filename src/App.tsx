import About from '@components/About';
import Hero from '@components/Hero';
import Navigation from '@components/Navigation';
import NewsLetter from '@components/NewsLetter';
import SocialMedia from '@components/SocialMedia';
import Stats from '@components/Stats';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <Navigation />
            <Hero />
            <About />
            <Stats />
            <SocialMedia />
            <NewsLetter />
        </BrowserRouter>
    );
}

export default App;