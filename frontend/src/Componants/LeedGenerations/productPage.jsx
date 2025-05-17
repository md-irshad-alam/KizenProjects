import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import apiclient from "../../utils/apiclint";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    campaign: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "organic";
    const utmCampaign = urlParams.get("utm_campaign") || "";
    setFormData((prev) => ({
      ...prev,
      source: utmSource,
      campaign: utmCampaign,
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiclient.post("/create-product", formData);
      alert("Thank you! Your info has been submitted.");
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ p: 3, bgcolor: "white", borderRadius: 2, boxShadow: 3 }}
      >
        <Typography variant="h6" gutterBottom>
          Get Exclusive Access
        </Typography>

        <TextField
          fullWidth
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="source-label">
            Where did you hear about us?
          </InputLabel>
          <Select
            labelId="source-label"
            name="source"
            value={formData.source}
            label="Where did you hear about us?"
            onChange={handleChange}
          >
            <MenuItem value="Facebook">Facebook</MenuItem>
            <MenuItem value="Instagram">Instagram</MenuItem>
            <MenuItem value="Google Ads">Google Ads</MenuItem>
            <MenuItem value="Email">Email</MenuItem>
            <MenuItem value="Organic">Organic</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Campaign"
          name="campaign"
          value={formData.campaign}
          onChange={handleChange}
          margin="normal"
          helperText="Auto-filled from URL if available"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default LeadForm;
