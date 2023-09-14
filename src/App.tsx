import About from '@components/About';
import Hero from '@components/Hero';
import Navigation from '@components/Navigation';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <Navigation />
            <Hero />
            <About />
        </BrowserRouter>
    );
}

export default App;