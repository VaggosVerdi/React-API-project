import DataFetch from './components/DataFetch'
import Form from './components/Form'
import { AuthProvider } from './contexts/AuthProvider';
import './App.sass'

export default function App() {
    return (
        <>
        <h1 className="text-center mb-5">CobaltFairy Trial</h1>
        <DataFetch />
        <AuthProvider>
            <Form />
        </AuthProvider>
        </>
    );
}