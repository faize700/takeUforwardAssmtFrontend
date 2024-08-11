import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import "./styles.css";
import axios from "axios";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import API_BASE_URL from "./services/helper";

function App() {
  const [bannerData, setBannerData] = useState({
    id: null,  // Track the ID
    visible: true,
    description: "",
    timer: 0,
    link: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/banner`)
      .then((response) => {
        setBannerData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }, []);

  const handleBannerUpdate = (updatedData) => {
    axios.put(`${API_BASE_URL}/banner/${bannerData.id}`, updatedData)
      .then(response => {
        console.log('Banner updated successfully:', response.data);
        setBannerData(prevData => ({
          ...prevData,
          ...updatedData
        })); // Update state with new banner data
      })
      .catch(error => {
        console.error('Error updating banner:', error);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      {bannerData.visible && (
        <Banner
          description={bannerData.description}
          link={bannerData.link}
          timer={bannerData.timer}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Open Dashboard
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Banner Dashboard</DialogTitle>
        <DialogContent>
          <Dashboard onBannerUpdate={handleBannerUpdate} initialData={bannerData} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
}

export default App;
