import DataFetch from './components/DataFetch'
import Form from './components/Form'
import { AuthProvider } from './contexts/AuthProvider';
import './App.sass'

export default function App() {
    return (
        <>
            <h1 className="text-center mb-3">Cobalt Fairy - Trial</h1>
            <div className="menu sticky-top mb-5">
                <a href="#table" className="nav-link mx-4">Data Table</a>
                <a href="#form" className="nav-link mx-4">Form</a>
            </div>
            <DataFetch />
            <AuthProvider>
                <Form />
            </AuthProvider>
        </>
    );
}