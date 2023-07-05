import React, { useContext, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axiosInstance from '../../../axios';
import Alert from '@mui/material/Alert';
import { ScenarionCreateContext } from '../../../utils/ScenarioCreateContext';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import html2canvas from 'html2canvas';
import { ScenarioContext } from '../../../utils/ScenarioContext';

export default function ViewScenario() {
  const { scenarioName } = useContext(ScenarioContext);
  const [scenarioData, setScenarioData] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const formScenarioRef = useRef(null);

  useEffect(() => {
    const fetchScenarioData = async () => {
      try {
        const response = await axiosInstance.get(`scenario/getonescenario/${scenarioName}/`);
        setScenarioData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchScenarioData();
  }, [scenarioName]);

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

      await axiosInstance.post(`scenario/storeimagescenario/`, {
        contenu: imageUrl,
        scenarioId: scenarioName,
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
          <table>
            <tbody>
              <tr>
                <td>
                  <TextField
                    required
                    id="outlined-required"
                    label="etablissement"
                    defaultValue={scenarioData.etablissement}
                    name="etablissement"
                    placeholder="etablissement"
                    InputProps={{ readOnly: true }}
                  />
                </td>
                <td>
                  <TextField
                    required
                    id="outlined-required"
                    label="unite"
                    defaultValue={scenarioData.unite}
                    name="unite"
                    placeholder="unite"
                    InputProps={{ readOnly: true }}
                  />
                </td>
              </tr>
              
            </tbody>
          </table>
        )}
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
      </div>
    </>
  );
}
