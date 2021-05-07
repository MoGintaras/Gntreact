import './App.css';
// import {useState as state, useEffect} from 'react'
import Toolbar from "./components/Toolbar";
import Home from "./components/Home";
import RecipeUpload from "./components/RecipeUpload";
// import Fetch from "./helpers/Fetch";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {

    return (
        <Router>
            <div className="">

                <Toolbar/>

                <div className="d-flex">

                    <Switch>

                        <Route exact path="/">
                            <Home/>
                        </Route>

                        <Route path="/upload">
                            <RecipeUpload />
                        </Route>
                    </Switch>


                </div>

            </div>
        </Router>
    );
}

export default App;

// create page where users can upload food recipes
// each recipe object should have these keys:
// title (string), images(array), ingridients (array) (ingridient should be object, with value and quantity example - butter - 200g)
// preparation (array)
// when recipe uploaded it should be saved to database
// there should also be middlewere to validate lengths of title (min 10 max 100), images, ingridients, preparation (at least one)
// when front end and backend functionality working push everything to git hub