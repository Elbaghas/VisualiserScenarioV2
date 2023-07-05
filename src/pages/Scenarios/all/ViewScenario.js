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
import { ScenarioContext } from '../../../utils/ScenarioContext'


export default function ViewScenario() {

    const { scenarioName } = useContext(ScenarioContext);
    const [scenarioData, setScenarioData] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const formScenarioRef = useRef(null);


    useEffect(() => {

        axiosInstance
            .get(`scenario/getonescenario/${scenarioName}/`)
            .then((res) => {
                console.log(res.data);
                setScenarioData(res.data);


            })
            .catch((error) => {
                console.log(error);
            });

    }, [scenarioName]);

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
                        reject(new Error("Erreur de génération"));
                    }
                });
            });

            const imageUrl = URL.createObjectURL(blob);
            setImageUrl(imageUrl);
            console.log(imageUrl);

            await axiosInstance.post(`scenario/storeimagescenario/`, {
                contenu: imageUrl,
                scenarioId: scenarioName,
            });

            console.log("Image Enregistré");
        } catch (error) {
            console.log("Error 404", error);
        }
    };

    return (

        <>
           <form ref={formScenarioRef}>
  {scenarioData && (
    <>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Établissement"
          defaultValue={scenarioData.etablissement}
          name="etablissement"
          placeholder="Établissement"
          InputProps={{ readOnly: true }}
        />
        <TextField
          required
          id="outlined-required"
          label="Unité"
          defaultValue={scenarioData.unite}
          name="unite"
          placeholder="Unité"
          InputProps={{ readOnly: true }}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Niveau"
          defaultValue={scenarioData.niveau}
          name="niveau"
          placeholder="Niveau"
          InputProps={{ readOnly: true }}
        />
        <TextField
          required
          id="outlined-required"
          label="Leçon"
          defaultValue={scenarioData.lesson}
          placeholder="Leçon"
          name="lesson"
          InputProps={{ readOnly: true }}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Durée"
          defaultValue={scenarioData.duree}
          name="duree"
          placeholder="Durée"
          InputProps={{ readOnly: true }}
        />
        <TextField
          required
          id="outlined-required"
          label="Méthode de travail"
          defaultValue={scenarioData.methode_de_travail}
          name="methode_de_travail"
          placeholder="Méthode de travail"
          InputProps={{ readOnly: true }}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Compétence"
          defaultValue={scenarioData.competence}
          name="competence"
          InputProps={{ readOnly: true }}
        />
      </div>
      <div>
        <textarea
          placeholder="Situation"
          style={{ width: '600px', height: '200px' }}
          readOnly
        >
          {scenarioData.situation}
        </textarea>
      </div>
      <div>
        {scenarioData.objectifs.map((objectif, index) => (
          <div key={index}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor={`standard-adornment-amount-${index}`}>
                Objectifs
              </InputLabel>
              <Input
                id={`standard-adornment-amount-${index}`}
                startAdornment={<InputAdornment position="start"></InputAdornment>}
                defaultValue={objectif['contenu']}
                readOnly
              />
            </FormControl>
          </div>
        ))}
      </div>
      <div>
        {scenarioData.activities.map((activity, index) => (
          <div key={index}>
            <TextField
              required
              label="Objectif"
              defaultValue={activity['objectif']}
              name="objectif"
              placeholder="Objectif"
              InputProps={{ readOnly: true }}
            />
            <TextField
              required
              label="Durée"
              defaultValue={activity['duree']}
              name="duree"
              placeholder="Durée"
              InputProps={{ readOnly: true }}
            />
            <TextField
              required
              label="Support"
              defaultValue={activity['support']}
              name="support"
              placeholder="Support"
              InputProps={{ readOnly: true }}
            />
            <table>
              <tbody>
                <tr>
                  <td>
                    <textarea
                      placeholder="Situation apprenant"
                      style={{ width: '600px', height: '200px' }}
                      defaultValue={activity['activité apprenant']}
                      readOnly
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <textarea
                      placeholder="Situation enseignant"
                      style={{ width: '600px', height: '200px' }}
                      defaultValue={activity['activité enseignant']}
                      readOnly
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  )}
</form>
            <div>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                   Enregistrer sous forme Image
                </Button>


            </div>
        </>


    )
};












