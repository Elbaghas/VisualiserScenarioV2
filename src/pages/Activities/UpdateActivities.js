
import React, { useState, useEffect, useContext } from 'react';
import { ActivityContext } from '../../utils/ActivityContext'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import axiosInstance from '../../axios';
import { useRef } from 'react';
const UpdateActivity = () => {
    const { activityId } = useContext(ActivityContext);
    const textareaRef = useRef(null);


    const handleTextareaChange = (e) => {
        const value = e.target.value;
        setTextareaValue(value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            content: value,
        }));

    };
    const [inputs, setInputs] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        lesson: '',
        level: '',
        content: '',
    });
    const [textareaValue, setTextareaValue] = useState(formData.content);
    const handleInputChange = (index, value) => {
        const updatedInputs = [...inputs];
        updatedInputs[index] = {
            ...updatedInputs[index],
            content: value,
        };
        setInputs(updatedInputs);
    };

    const handleAddInput = (e) => {
        e.preventDefault();
        setInputs(prevInputs => [...prevInputs,]);
    };

    useEffect(() => {
        // Fetch the activity data using the activityId
        axiosInstance
            .get(`activite/edit/${activityId}/`)
            .then((res) => {
                const activityData = res.data.activity;
                setInputs(res.data.resources);
                console.log(inputs)
                setFormData({
                    title: activityData.name,
                    subject: activityData.subject,
                    lesson: activityData.lesson,
                    level: activityData.level,
                    content: activityData.contenu,
                });
            })
            .catch((error) => {
                console.log(error);
            });

    }, [activityId]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const resourcesData = inputs.map((input) => ({
            content: input.content,
            resource_id: input.resource_id
        }));
        console.log(resourcesData)
        axiosInstance
            .post(`activite/update/${activityId}/`, {
                name: formData.title,
                subject: formData.subject,
                lesson: formData.lesson,
                level: formData.level,
                contenu: textareaValue,
                resources: resourcesData,
            })
            .then((res) => {

                // console.log(res);
                // console.log(res.data);
                // navigate('/getActivitie');
            });

    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
            />
            <TextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
            />
            <TextField
                label="Lesson"
                name="lesson"
                value={formData.lesson}
                onChange={handleChange}
            />
            <TextField
                label="Level"
                name="level"
                value={formData.level}
                onChange={handleChange}
            />
            <div>
                <textarea ref={textareaRef} onChange={handleTextareaChange} style={{ width: '600px', height: '200px' }} value={formData.content} ></textarea>
            </div>
            <div>
                {inputs.map((input, index) => (
                    <div>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="standard-adornment-amount">Resource</InputLabel>
                            <Input
                                id="standard-adornment-amount {index}"
                                value={input['content']}
                                key={input['resource_id']}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                startAdornment={<InputAdornment position="start"
                                ></InputAdornment>}
                            />
                        </FormControl>
                    </div>
                ))}
            </div>
            <button type="submit">Update Activity</button>
        </form>
    );
};

export default UpdateActivity;

