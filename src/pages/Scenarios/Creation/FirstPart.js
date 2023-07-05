import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom';
import { ScenarionCreateContext } from '../../../utils/ScenarioCreateContext'
import Alert from '@mui/material/Alert';

export default function FirstPartScanario() {

    const navigate = useNavigate();
    const { setScenario } = useContext(ScenarionCreateContext);
    const [successAlert, setSuccessAlert] = useState(false);


    useEffect(() => {
        if (successAlert) {
            const timeout = setTimeout(() => {
                setSuccessAlert(false);
            }, 100000);

            return () => clearTimeout(timeout);
        }
    }, [successAlert]);


    const DataActivities = Object.freeze({
        unite: '',
        lesson: '',
        etablissement: '',
        duree: '',
        methode_de_travail: '',
        niveau: '',
    });
    const [formData, updateFormData] = useState(DataActivities);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosInstance
            .post(`scenario/createfirstpart/`, {
                unite: formData.unite,
                lesson: formData.lesson,
                etablissement: formData.etablissement,
                duree: formData.duree,
                methode_de_travail: formData.methode_de_travail,
                niveau: formData.niveau,

            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                const scenarioId = res.data.scenario_id;
                console.log(scenarioId)
                setScenario(scenarioId);
                navigate('/SecondPartScanarioCreation')
            });
    };


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    name="etablissement"
                    placeholder="etablissement"
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    name="unite"
                    placeholder="unite"
                    onChange={handleChange}
                />

            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    name="niveau"
                    placeholder="niveau"
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    placeholder="lesson"
                    name="lesson"
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    name="duree"
                    placeholder="duree"
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    name="methode_de_travail"
                    placeholder="methode_de_travail"
                    onChange={handleChange}
                />
            </div>
            <div>
                <Button

                    type="submit"

                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    Add new Activity
                </Button>
            </div>
            {successAlert && (
                <Alert severity="success" onClose={() => setSuccessAlert(false)}>
                    Activity created successfully!
                </Alert>
            )}
        </Box>
    );
}

