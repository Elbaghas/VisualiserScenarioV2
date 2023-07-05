import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState, useRef, useEffect, useContext } from 'react';
import axiosInstance from '../../../axios';
import Alert from '@mui/material/Alert';
import { ScenarionCreateContext } from '../../../utils/ScenarioCreateContext'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import html2canvas from 'html2canvas';


export default function ViewFinal() {

    const { scenarioId } = useContext(ScenarionCreateContext);
    const [scenarioData, setScenarioData] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const formScenarioRef = useRef(null);


    useEffect(() => {

        axiosInstance
            .get(`scenario/getonescenario/${scenarioId}/`)
            .then((res) => {
                console.log(res.data);
                setScenarioData(res.data);


            })
            .catch((error) => {
                console.log(error);
            });

    }, [scenarioId]);

    console.log(scenarioData);


    const handleSubmit = async () => {
        try {
            const formElement = formScenarioRef.current;
            const canvas = await html2canvas(formElement);
            const blob = await new Promise((resolve, reject) => {
                canvas.toBlob((blob) => {
                    if (blob) {
                        resolve(blob);
                    } else {
                        reject(new Error("Failed to generate blob."));
                    }
                });
            });

            const imageUrl = URL.createObjectURL(blob);
            setImageUrl(imageUrl);
            console.log(imageUrl);

            await axiosInstance.post(`scenario/storeimagescenario/`, {
                contenu: imageUrl,
                scenarioId: scenarioId,
            });

            console.log("Image saved successfully.");
        } catch (error) {
            console.log("Error saving image:", error);
        }
    };

    return (

        <>
            <form ref={formScenarioRef}>
                {scenarioData && (
                    <><div>
                        <TextField
                            required
                            id="outlined-required"
                            label="etablissement"
                            defaultValue={scenarioData.etablissement}
                            name="etablissement"
                            placeholder="etablissement"
                            InputProps={{ readOnly: true }} />
                        <TextField
                            required
                            id="outlined-required"
                            label="unite"
                            defaultValue={scenarioData.unite}
                            name="unite"
                            placeholder="unite"
                            InputProps={{ readOnly: true }} />
                    </div><div>
                            <TextField
                                required
                                id="outlined-required"
                                label="niveau"
                                defaultValue={scenarioData.niveau}
                                name="niveau"
                                placeholder="niveau"
                                InputProps={{ readOnly: true }} />
                            <TextField
                                required
                                id="outlined-required"
                                label="lesson"
                                defaultValue={scenarioData.lesson}
                                placeholder="lesson"
                                name="lesson"
                                InputProps={{ readOnly: true }} />
                        </div><div>
                            <TextField
                                required
                                id="outlined-required"
                                label="duree"
                                defaultValue={scenarioData.duree}
                                name="duree"
                                placeholder="duree"
                                InputProps={{ readOnly: true }} />
                            <TextField
                                required
                                id="outlined-required"
                                label="methode_de_travail"
                                defaultValue={scenarioData.methode_de_travail}
                                name="methode_de_travail"
                                placeholder="methode_de_travail"
                                InputProps={{ readOnly: true }} />
                        </div><div>
                            <TextField
                                required
                                id="outlined-required"
                                label="competence"
                                defaultValue={scenarioData.competence}
                                name="competence"
                                InputProps={{ readOnly: true }} />
                        </div><div>
                            <textarea
                                placeholder="situation"
                                style={{ width: '600px', height: '200px' }}
                                readOnly
                            >
                                {scenarioData.situation}
                            </textarea>
                        </div><div>
                            {scenarioData.objectifs.map((objectif, index) => (
                                <div key={index}>
                                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                        <InputLabel htmlFor={`standard-adornment-amount-${index}`}>Objectifs</InputLabel>
                                        <Input
                                            id={`standard-adornment-amount-${index}`}
                                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                                            defaultValue={objectif['contenu']} readOnly />
                                    </FormControl>
                                </div>
                            ))}
                        </div><div>
                            {scenarioData.activities.map((activity, index) => (
                                <div key={index}>
                                    <TextField
                                        required
                                        label="Objectif"
                                        defaultValue={activity['objectif']}
                                        name="objectif"
                                        placeholder="Objectif"
                                        InputProps={{ readOnly: true }} />
                                    <TextField
                                        required
                                        label="Durée"
                                        defaultValue={activity['duree']}
                                        name="duree"
                                        placeholder="Durée"
                                        InputProps={{ readOnly: true }} />
                                    <TextField
                                        required
                                        label="Support"
                                        defaultValue={activity['support']}
                                        name="support"
                                        placeholder="Support"
                                        InputProps={{ readOnly: true }} />
                                    <textarea
                                        placeholder="situation"
                                        style={{ width: '600px', height: '200px' }}
                                        defaultValue={activity['activityapprenant']}
                                        readOnly
                                    ></textarea>
                                    <textarea
                                        placeholder="situation"
                                        style={{ width: '600px', height: '200px' }}
                                        defaultValue={activity['activityenseignant']}
                                        readOnly
                                    ></textarea>
                                </div>
                            ))}
                        </div></>
                )};
            </form>
            <div>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    Save it As image
                </Button>
                <img src="blob:http://localhost:3000/8d9302a9-a02c-43ec-a9ec-34a856b8454d" alt="h" />

            </div>
        </>


    )
};












