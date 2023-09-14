import Hero from '@components/Hero';
import Navigation from '@components/Navigation';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <Navigation />
            <Hero />
        </BrowserRouter>
    );
}

export default App;