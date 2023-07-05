import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from '../../../axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ScenarioContext } from '../../../utils/ScenarioContext'
import { useNavigate } from 'react-router-dom';

const GetScenarios = () => {
    const navigate = useNavigate();
    const { setScenario } = useContext(ScenarioContext);
    const [scenarios, setScenarios] = useState([]);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [selectedScenario, setSelectedScenario] = useState(null);

    const handleScenarioDelete = (scenario) => {
        setSelectedScenario(scenario);
        setDeleteConfirmationOpen(true);
    };

    const handleScenarioUpdate = (scenarioId) => {
        setScenario(scenarioId)
        navigate('/FirstPartUpdate')
    };

    const handleScenarioView = (scenarioId) => {
        setScenario(scenarioId)
        navigate('/ViewScenario')
    };

    const confirmScenarioDelete = () => {
        if (selectedScenario) {
            axiosInstance
                .post(`scenario/deletescenario/${selectedScenario.id}/`)
                .then((response) => {
                    console.log(response.data); // Log the success message if needed
                    setScenarios(scenarios.filter((scenario) => scenario.id !== selectedScenario.id));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        setDeleteConfirmationOpen(false);
    };

    const cancelScenarioDelete = () => {
        setDeleteConfirmationOpen(false);
        setSelectedScenario(null);
    };

    useEffect(() => {
        // Fetch scenarios data from the backend
        axiosInstance
            .get('scenario/getallsceanrio/')
            .then((response) => {
                setScenarios(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>Scenarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>Etablissement</th>
                        <th>Unite</th>
                        <th>Niveau</th>
                        <th>Lesson</th>
                        {/* Add more table headers for other scenario fields */}
                    </tr>
                </thead>
                <tbody>
                    {scenarios.map((scenario) => (
                        <tr key={scenario.id}>
                            <td>{scenario.etablissement}</td>
                            <td>{scenario.unite}</td>
                            <td>{scenario.niveau}</td>
                            <td>{scenario.lesson}</td>
                            {/* Add more table cells for other scenario fields */}
                            <td>
                                <button onClick={() => handleScenarioDelete(scenario)}>Delete</button>
                                <button onClick={() => handleScenarioUpdate(scenario.id)}>Update</button>
                                <button onClick={() => handleScenarioView(scenario.id)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog
                open={deleteConfirmationOpen}
                onClose={cancelScenarioDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this scenario?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelScenarioDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmScenarioDelete} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default GetScenarios;
