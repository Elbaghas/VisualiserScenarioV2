
import * as React from 'react';
import { ScenarioContext } from '../../../utils/ScenarioContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

export default function FirstPartUpdate() {

    const navigate = useNavigate();
    const { scenarioName } = useContext(ScenarioContext);
    const [formData, setFormData] = useState({
        unite: '',
        lesson: '',
        etablissement: '',
        duree: '',
        methode_de_travail: '',
        niveau: '',
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };
    useEffect(() => {
        axiosInstance
            .get(`scenario/editfirstpart/${scenarioName}/`)
            .then((res) => {
                console.log(res.data.objectives)

                const scenariodata = res.data.scenario;
                setFormData({
                    unite: scenariodata.unite,
                    lesson: scenariodata.lesson,
                    etablissement: scenariodata.etablissement,
                    duree: scenariodata.duree,
                    methode_de_travail: scenariodata.methode_de_travail,
                    niveau: scenariodata.niveau,

                });

            });

    }, [scenarioName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .post(`scenario/updatefirstpart/`, {
                unite: formData.unite,
                lesson: formData.lesson,
                etablissement: formData.etablissement,
                duree: formData.duree,
                methode_de_travail: formData.methode_de_travail,
                niveau: formData.niveau,
                scenario_name: scenarioName

            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate('/SecondPartUpdate')
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
                    name="etablissement"
                    value={formData.etablissement}
                    onChange={handleChange}


                />
                <TextField
                    required
                    id="outlined-required"
                    defaultValue=""
                    name="unite"
                    placeholder="unite"
                    value={formData.unite}
                    onChange={handleChange}
                />

            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    defaultValue=""
                    name="niveau"
                    placeholder="niveau"
                    value={formData.niveau}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    defaultValue=""
                    placeholder="lesson"
                    name="lesson"
                    value={formData.lesson}
                    onChange={handleChange}
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    defaultValue=""
                    name="duree"
                    placeholder="duree"
                    value={formData.duree}
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    defaultValue=""
                    name="methode_de_travail"
                    placeholder="methode_de_travail"
                    value={formData.methode_de_travail}
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
                    Update First Part
                </Button>
            </div>
        </Box>
    );
}

