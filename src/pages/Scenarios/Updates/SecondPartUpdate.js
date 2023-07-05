import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef } from 'react';
import axiosInstance from '../../../axios';
import { useNavigate } from 'react-router-dom';
import { ScenarioContext } from '../../../utils/ScenarioContext';
import Alert from '@mui/material/Alert';

export default function SecondPartUpdate() {

    const [inputs, setInputs] = useState([]);
    const { scenarioName } = useContext(ScenarioContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        competence: ''
    });

    const textareaRef = useRef(null);
    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = () => {
        setTextareaValue(textareaRef.current.value);
    };

    useEffect(() => {
        axiosInstance
            .get(`scenario/editfirstpart/${scenarioName}/`)
            .then((res) => {
                const scenariodata = res.data.scenario;
                setFormData({
                    competence: scenariodata.competence,

                });
                setTextareaValue(scenariodata.situation)
                setInputs(res.data.objectives)
                console.log(inputs)

            });


    }, [scenarioName]);

    const handleInputChange = (index, value) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = {
            ...updatedInputs[index],
            contenu: value,
        };
        setInputs(updatedInputs);
        console.log(inputs)
    };

    // const handleAddInput = (e) => {
    //     e.preventDefault();
    //     const textareaValue = textareaRef.current.value; // Get the value of the textarea
    //     setInputs(prevInputs => [...prevInputs, textareaValue]);
    // };




    const handleChange = (e) => {
        setFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const objectifsData = inputs.map((input) => ({
            contenu: input.contenu,
            id: input.id
        }));
        console.log(objectifsData)
        axiosInstance
            .post(`scenario/updatesecondpart/`, {
                competence: formData.competence,
                situation: textareaValue,
                objectifs: objectifsData,
                scenario_id: scenarioName
            })
            .then((res) => {

                console.log(res);
                console.log(res.data);
                navigate('/ThirdPartUpdate')

            }).catch((error) => {
                console.log(error);
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
                    label="competence"
                    defaultValue=""
                    name="competence"
                    onChange={handleChange}
                    value={formData.competence}
                />

            </div>

            <div>
                <textarea value={textareaValue} placeeholder="situation" ref={textareaRef} style={{ width: '600px', height: '200px' }} onChange={handleTextareaChange}></textarea>
            </div>
            <div>
                {inputs.map((input, index) => (
                    <div>
                        {/* <TextField
                            key={index}
                            value={input}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            label="Input"
                            sx={{ m: 1, width: '100ch' }}
                        /> */}
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">Objectifs</InputLabel>
                            <Input
                                id="standard-adornment-amount {index}"
                                onChange={(e) => handleInputChange(index, e.target.value)} value={input['contenu']}
                                startAdornment={<InputAdornment position="start"
                                ></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                ))}
                {/* <Button variant="contained" type="submit" onClick={handleAddInput}>
                    Add objectif
                </Button> */}
            </div>
            <div>
                <Button

                    type="submit"

                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    Add new sceanario
                </Button>
            </div>

        </Box>
    );
}

