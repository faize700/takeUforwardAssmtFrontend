import React, { useState, useEffect } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Container, Typography } from '@mui/material';

function Dashboard({ onBannerUpdate, initialData }) {
  const [description, setDescription] = useState(initialData.description || "");
  const [timer, setTimer] = useState(initialData.timer || 0);
  const [link, setLink] = useState(initialData.link || "");
  const [visible, setVisible] = useState(initialData.visible || true);

  useEffect(() => {
    // Sync state with initial data when initialData changes
    setDescription(initialData.description || "");
    setTimer(initialData.timer || 0);
    setLink(initialData.link || "");
    setVisible(initialData.visible || true);
  }, [initialData]);

  const handleUpdate = () => {
    onBannerUpdate({ description, timer, link, visible });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Banner Dashboard
      </Typography>
      <TextField
        fullWidth
        label="Banner Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        type="number"
        label="Timer (seconds)"
        value={timer}
        onChange={(e) => setTimer(Number(e.target.value))}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Banner Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        margin="normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={visible}
            onChange={() => setVisible(!visible)}
          />
        }
        label="Show Banner"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdate}
        style={{ marginTop: "20px" }}
      >
        Update Banner
      </Button>
    </Container>
  );
}

export default Dashboard;
