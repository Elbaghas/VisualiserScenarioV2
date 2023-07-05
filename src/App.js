
import React, { Component } from 'react'
// import Header from './components/Header';
// import Home from './components/Home';
// import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
// import Register from './components/register'
// import Login from './components/Login'
import Home from './pages/Home'
import Login from './pages/Login'
import Header2 from './components/Header2'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import Footer2 from './components/Footer2';
import Contact from './pages/Contact';
import Register from './components/register'
import Premium from './pages/Premieum';
import Activitie from './pages/Activities/Activities'
import Getactivities from './pages/Activities/getactivities';
import UpdateActivity from './pages/Activities/UpdateActivities';
import { ActivityProvider } from './utils/ActivityContext'
import { SceanarioCreateProvider } from './utils/ScenarioCreateContext'
import { ScenarioProvider } from './utils/ScenarioContext'
import ViewActivity from './pages/Activities/Viewactivities'
import FirstPartScanario from './pages/Scenarios/Creation/FirstPart'
import SecondPartScanario from './pages/Scenarios/Creation/SecondPart'
import ThirdPartScanario from './pages/Scenarios/Creation/ThirdPart'
import ViewFinal from './pages/Scenarios/Creation/ViewFinal'
import GetScenarios from './pages/Scenarios/all/getScenarios'
import ViewScenario from './pages/Scenarios/all/ViewScenario'
import FirstPartUpdate from './pages/Scenarios/Updates/FirstPartUpdate'
import SecondPartUpdate from './pages/Scenarios/Updates/SecondPartUpdate'
import ThirdPartUpdate from './pages/Scenarios/Updates/ThirdPartUpdate'
class App extends Component {

  render() {
    return (
      <div className="App">
        <AuthProvider>
          <ActivityProvider>
            <SceanarioCreateProvider>
              <ScenarioProvider>
                <Header2 />
                <Routes>
                  <Route element={<Login></Login>} path="/login" />
                  <Route element={<Contact></Contact>} path="/contact" />
                  <Route element={<Register></Register>} path="/register" />

                  <Route element={<Activitie></Activitie>} path="/Activitie" />
                  <Route element={<Getactivities></Getactivities>} path="/getActivitie" />
                  <Route element={<UpdateActivity></UpdateActivity>} path="/updateActivity" />
                  <Route element={<ViewActivity></ViewActivity>} path="/viewActivity" />
                  <Route element={<FirstPartScanario></FirstPartScanario>} path="/FirstPartScanarioCreation" />
                  <Route element={<SecondPartScanario></SecondPartScanario>} path="/SecondPartScanarioCreation" />
                  <Route element={<ThirdPartScanario></ThirdPartScanario>} path="/ThirdPartScanarioCreation" />
                  <Route element={<ViewFinal></ViewFinal>} path="/ViewFinalScenario" />
                  <Route element={<GetScenarios></GetScenarios>} path="/GetScenarios" />
                  <Route element={<ViewScenario></ViewScenario>} path="/ViewScenario" />
                  <Route element={<FirstPartUpdate></FirstPartUpdate>} path="/FirstPartUpdate" />
                  <Route element={<SecondPartUpdate></SecondPartUpdate>} path="/SecondPartUpdate" />
                  <Route element={<ThirdPartUpdate></ThirdPartUpdate>} path="/ThirdPartUpdate" />

                  <Route element={<Premium></Premium>} path="/premiem" />
                  <Route exact path='/' element={<PrivateRoute />}>
                    <Route exact path='/' element={<Home />} />
                  </Route>
                </Routes>
                <Footer2></Footer2>
              </ScenarioProvider>
            </SceanarioCreateProvider>
          </ActivityProvider>
        </AuthProvider>


      </div>
    );

  }

}

export default App;

