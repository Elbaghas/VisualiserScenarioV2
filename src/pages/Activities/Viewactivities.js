
import React, { useState, useEffect, useContext, useRef } from 'react';
import { ActivityContext } from '../../utils/ActivityContext'
import html2canvas from 'html2canvas';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import axiosInstance from '../../axios';

const ViewActivity = () => {
    const formRef = useRef(null);
    const [imageUrl, setImageUrl] = useState('');
    const { activityId } = useContext(ActivityContext);
    const [inputs, setInputs] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        subject: '',
        lesson: '',
        level: '',
        content: '',
    });

    useEffect(() => {
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

    const handleSaveAsImage = () => {
        const formElement = formRef.current;

        html2canvas(formElement).then((canvas) => {
            canvas.toBlob((blob) => {
                const imageUrl = URL.createObjectURL(blob);
                setImageUrl(imageUrl);
                console.log(imageUrl)
            });
        });
    };
    return (
        <>
            <div className="container" id="image-container">
                <br /> <br />
                <form ref={formRef} >
                    <TextField
                        label="Title"
                        name="title"
                        value={formData.title}
                        InputProps={{ readOnly: true }}

                    />
                    <TextField
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        InputProps={{ readOnly: true }}

                    />
                    <TextField
                        label="Lesson"
                        name="lesson"
                        value={formData.lesson}
                        InputProps={{ readOnly: true }}

                    />
                    <TextField
                        label="Level"
                        name="level"
                        value={formData.level}
                        InputProps={{ readOnly: true }}

                    />
                    <div>
                        <textarea style={{ width: '600px', height: '200px' }} value={formData.content} readOnly ></textarea>
                    </div>
                    <div>
                        {inputs.map((input, index) => (
                            <div>
                                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-amount">Resource</InputLabel>
                                    <Input
                                        id="standard-adornment-amount {index}"
                                        value={input['content']}
                                        readOnly
                                        key={input['resource_id']}
                                        startAdornment={<InputAdornment position="start"
                                        ></InputAdornment>}
                                    />
                                </FormControl>
                            </div>
                        ))}
                    </div>
                </form>
                <button onClick={handleSaveAsImage}>Save as Image</button>
                {imageUrl && (
                    <div>
                        <p>Image URL: {imageUrl}</p>
                        <img src={imageUrl} alt="u" />
                    </div>
                )}

            </div>
        </>



    );
};

export default ViewActivity;

