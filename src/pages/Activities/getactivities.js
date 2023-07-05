import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from '../../axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ActivityContext } from '../../utils/ActivityContext'
import { useNavigate } from 'react-router-dom';



const Getactivities = () => {

    const navigate = useNavigate();
    const { setActivity } = useContext(ActivityContext);
    const [activities, setActivities] = useState([]);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const handleDelete = (activity) => {
        setSelectedActivity(activity);
        setDeleteConfirmationOpen(true);
    };

    const handleUpdate = (activity) => {
        setActivity(activity);
        navigate('/updateActivity');
        console.log(activity)
    };

    const handleView = (activity) => {
        setActivity(activity);
        navigate('/viewactivity');
        console.log(activity)
    };

    const confirmDelete = () => {
        if (selectedActivity) {
            axiosInstance
                .post(`activite/delete/${selectedActivity.id}/`)
                .then((response) => {
                    console.log(response.data);  // Log the success message if needed
                    setActivities(activities.filter((activity) => activity.id !== selectedActivity.id));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        setDeleteConfirmationOpen(false);
    };

    const cancelDelete = () => {
        setDeleteConfirmationOpen(false);
        setSelectedActivity(null);
    };


    useEffect(() => {
        // Fetch activities data from the backend
        axiosInstance
            .get(`activite/get/`)
            .then((response) => {
                setActivities(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>Activities</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Lesson</th>
                        <th>Level</th>
                        {/* Add more table headers for other activity fields */}
                    </tr>
                </thead>
                <tbody>
                    {activities.map((activity) => (
                        <tr key={activity.id}>
                            <td>{activity.name}</td>
                            <td>{activity.subject}</td>
                            <td>{activity.lesson}</td>
                            <td>{activity.level}</td>
                            <td>
                                <button onClick={() => handleDelete(activity)}>Delete</button>
                                <button onClick={() => handleUpdate(activity.id)}>Update</button>
                                <button onClick={() => handleView(activity.id)}>View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Dialog
                open={deleteConfirmationOpen}
                onClose={cancelDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this activity?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={cancelDelete} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={confirmDelete} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Getactivities;
