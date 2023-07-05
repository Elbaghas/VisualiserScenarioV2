import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef } from 'react';
import axiosInstance from '../../axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

export default function Activitie() {

    const [inputs, setInputs] = useState([null]);
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
    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#f6f8fa',
        100: '#eaeef2',
        200: '#d0d7de',
        300: '#afb8c1',
        400: '#8c959f',
        500: '#6e7781',
        600: '#57606a',
        700: '#424a53',
        800: '#32383f',
        900: '#24292f',
    };

    //     const StyledTextarea = styled(TextareaAutosize)(
    //         ({ theme }) => `
    //     width: 440px;
    //     font-family: IBM Plex Sans, sans-serif;
    //     font-size: 0.875rem;
    //     font-weight: 400;
    //     line-height: 1.5;
    //     padding: 12px;
    //     border-radius: 12px 12px 0 12px;
    //     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    //     background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    //     border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    //     box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    //     &:hover {
    //       border-color: ${blue[400]};
    //     }

    //     &:focus {
    //       border-color: ${blue[400]};
    //       box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    //     }

    //     // firefox
    //     &:focus-visible {
    //       outline: 0;
    //     }
    //   `,
    //     );
    const DataActivities = Object.freeze({
        title: '',
        subject: '',
        lesson: '',
        level: '',
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
            .post(`activite/create/`, {
                name: formData.title,
                subject: formData.subject,
                lesson: formData.lesson,
                level: formData.level,
                contenu: textareaValue,
                created_by: 1,
                resources: resourcesData,
            })
            .then((res) => {

                setSuccessAlert(true);
                console.log(res);
                console.log(res.data);
                navigate('/getActivitie');
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
                    name="title"
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    name="subject"
                    onChange={handleChange}
                />

            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    name="lesson"
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue=""
                    name="level"
                    onChange={handleChange}
                />
            </div>
            <div>
                <textarea ref={textareaRef} style={{ width: '600px', height: '200px' }} onChange={handleTextareaChange}></textarea>
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
                            <InputLabel htmlFor="standard-adornment-amount">Resource</InputLabel>
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
                    Add Input
                </Button>
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

