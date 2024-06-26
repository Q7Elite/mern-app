import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom'

import Layout from './layouts/Layout'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <p>Home Page</p>
                        </Layout>
                    }
                ></Route>
                <Route
                    path="/search"
                    element={
                        <Layout>
                            <p>Search Page</p>
                        </Layout>
                    }
                ></Route>
                <Route
                    path="/register"
                    element={
                        <Layout>
                            <Register></Register>
                        </Layout>
                    }
                ></Route>
                <Route
                    path="/sign-in"
                    element={
                        <Layout>
                            <SignIn></SignIn>
                        </Layout>
                    }
                ></Route>
                <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
        </Router>
    )
}

export default App
