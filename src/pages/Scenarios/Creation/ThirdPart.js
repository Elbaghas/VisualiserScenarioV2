import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useRef, useEffect, useContext } from 'react';
import axiosInstance from '../../../axios';
import Alert from '@mui/material/Alert';
import { ScenarionCreateContext } from '../../../utils/ScenarioCreateContext'
import { useNavigate } from 'react-router-dom';


export default function ThirdPartScanario() {
    const textareaRef1 = useRef(null);
    const [textareaValue1, setTextareaValue1] = useState('');
    const { scenarioId } = useContext(ScenarionCreateContext);
    const navigate = useNavigate();
    const [textareaValue2, setTextareaValue2] = useState('');
    const handleTextareaChange1 = (e) => {
        setTextareaValue1(e.target.value);
        //console.log(textareaValue1)
    };

    const handleTextareaChange2 = (e) => {
        setTextareaValue2(e.target.value);
        //console.log(textareaValue2)
    };
    const DataActivities = Object.freeze({
        objectif: '',
        duree: '',
        support: '',
        activityapprenant: '',
        activityenseignant: '',
    });

    const [formDatas, setFormDatas] = useState([DataActivities]);
    const [successAlert, setSuccessAlert] = useState(false);
    useEffect(() => {
        setFormDatas((prevFormDatas) => {
            const updatedFormDatas = [...prevFormDatas];
            const lastIndex = updatedFormDatas.length - 1;

            if (lastIndex >= 0) {
                updatedFormDatas[lastIndex] = {
                    ...updatedFormDatas[lastIndex],
                    activityapprenant: textareaValue1.trim(),
                    activityenseignant: textareaValue2.trim(),
                };
            }

            return updatedFormDatas;
        });
    }, [textareaValue1, textareaValue2]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setFormDatas((prevFormDatas) => {
            const updatedFormDatas = prevFormDatas.map((formData, i) => {
                if (i === index) {
                    return {
                        ...formData,
                        [name]: value.trim(),
                    };
                }
                return formData;
            });
            return updatedFormDatas;
        });
    };

    const handleAddActivity = () => {
        const updatedFormData = {
            ...DataActivities,
            activityapprenant: textareaValue1.trim(),
            activityenseignant: textareaValue2.trim(),
        };
        setFormDatas((prevFormDatas) => [...prevFormDatas, updatedFormData]);
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance
            .post(`scenario/createthirdpart/`, {

                formDatas: formDatas,
                scenarioId: scenarioId

            })
            .then((res) => {
                navigate('/ViewFinalScenario')

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
            {formDatas.map((formData, index) => (
                <div key={index}>
                    <div>
                        <TextField
                            required
                            id={`outlined-required-objectif-${index}`}
                            label="Objectif"
                            defaultValue=""
                            name="objectif"
                            placeholder="Objectif"
                            value={formData.objectif}
                            onChange={(e) => handleChange(e, index)}
                        />
                        <TextField
                            required
                            id={`outlined-required-duree-${index}`}
                            label="Durée"
                            defaultValue=""
                            name="duree"
                            placeholder="Durée"
                            value={formData.duree}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            id={`outlined-required-support-${index}`}
                            label="Support"
                            defaultValue=""
                            name="support"
                            placeholder="Support"
                            value={formData.support}
                            onChange={(e) => handleChange(e, index)}
                        />
                    </div>

                    <div>
                        <textarea
                            placeholder="situation"
                            style={{ width: '600px', height: '200px' }}
                            onChange={handleTextareaChange1}
                        ></textarea>
                        <textarea
                            placeholder="situation"
                            style={{ width: '600px', height: '200px' }}
                            onChange={handleTextareaChange2}
                        ></textarea>

                    </div>
                </div>
            ))}
            <div>
                <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2, marginLeft: 2 }}
                    onClick={handleAddActivity}
                >
                    Add more activities
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
        </Box>
    );
}

