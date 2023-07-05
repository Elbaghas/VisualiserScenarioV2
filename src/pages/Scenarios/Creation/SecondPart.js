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
import { ScenarionCreateContext } from '../../../utils/ScenarioCreateContext'
import Alert from '@mui/material/Alert';

export default function SecondPartScanario() {

    const [inputs, setInputs] = useState([null]);
    const { scenarioId } = useContext(ScenarionCreateContext);
    const navigate = useNavigate();
    const [successAlert, setSuccessAlert] = useState(false);

    const textareaRef = useRef(null);
    const [textareaValue, setTextareaValue] = useState('');

    const handleTextareaChange = () => {
        setTextareaValue(textareaRef.current.value);
    };

    useEffect(() => {
        if (successAlert) {
            const timeout = setTimeout(() => {
                setSuccessAlert(false);
            }, 100000);

            return () => clearTimeout(timeout);
        }
    }, [successAlert]);

    const handleInputChange = (index, value) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = value;
        setInputs(updatedInputs);
        console.log(updatedInputs)
    };

    const handleAddInput = (e) => {
        e.preventDefault();
        const textareaValue = textareaRef.current.value; // Get the value of the textarea
        setInputs(prevInputs => [...prevInputs, textareaValue]);
    };


    const DataActivities = Object.freeze({
        competence: '',
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
        const resourcesData = inputs.map((input) => ({
            content: input,
        }));
        axiosInstance
            .post(`scenario/createsecondpart/`, {
                competence: formData.competence,
                situation: textareaValue,
                objectifs: resourcesData,
                scenario_id: scenarioId
            })
            .then((res) => {

                setSuccessAlert(true);
                console.log(res);
                console.log(res.data);
                navigate('/ThirdPartScanarioCreation');
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
                />

            </div>

            <div>
                <textarea placeeholder="situation" ref={textareaRef} style={{ width: '600px', height: '200px' }} onChange={handleTextareaChange}></textarea>
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
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                startAdornment={<InputAdornment position="start"
                                ></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                ))}
                <Button variant="contained" type="submit" onClick={handleAddInput}>
                    Add objectif
                </Button>
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
            {successAlert && (
                <Alert severity="success" onClose={() => setSuccessAlert(false)}>
                    Activity created successfully!
                </Alert>
            )}
        </Box>
    );
}

