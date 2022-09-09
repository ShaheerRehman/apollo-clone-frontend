import * as React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

// Generate Sales Data

const Circle = styled(CheckCircleIcon)({
  color: "#02C797",
  fontSize: "20px",
  marginRight: "3px",
});

const Title = styled(Typography)({
  fontSize: "15px",
  fontWeight: 600,
  marginBottom: "2px",
});

const MyBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const Options = styled(Typography)({
  color: "#5D6A7E",
  fontSize: "14px",
  marginRight: "28px",
});

export default function Chart() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Title>Need more pipeline? Upgrade now for advanced features.</Title>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MyBox>
              <Circle />
              <Options>Advanced Filters</Options>
            </MyBox>
            <MyBox>
              <Circle />

              <Options>Find mobile numbers</Options>
            </MyBox>
            <MyBox>
              <Circle />

              <Options>Push to CRM</Options>
            </MyBox>
          </Box>
        </Box>
        <Button
          style={{ textTransform: "none", backgroundColor: "#1991EB" }}
          sx={{
            width: "auto",
            height: "auto",
            minHeight: "32px",

            backgroundColor: "primary.main",
            borderRadius: "4px",
            padding: "0px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
          }}
          variant="contained"
        >
          View Plans
        </Button>
      </Box>
    </React.Fragment>
  );
}
