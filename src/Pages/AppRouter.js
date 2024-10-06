import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Sighin from './Sighin';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="sighin" element={<Sighin />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
