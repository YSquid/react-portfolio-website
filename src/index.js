import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ReactGA from 'react-ga';

//Google Analytics initialization function
export const initGA = () => {       
    ReactGA.initialize('G-DTNW0PWFKR');
} 

//Google Analytics pageview function
export const GAPageView = (page) => {   
    ReactGA.pageview(page);   
}


const root = ReactDOM.createRoot(
    document.getElementById('root')
)
root.render(<App />);