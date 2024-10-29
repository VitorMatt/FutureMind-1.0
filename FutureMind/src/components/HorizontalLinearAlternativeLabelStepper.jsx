import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import React from 'react'
const steps = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];

// Personalizando o conector para alterar a cor da linha entre os passos
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${StepConnector.line}`]: {
    borderColor: '#012A4A', // Cor da linha conectando os passos
  },
}));

export default function HorizontalLinearAlternativeLabelStepper({ activeStep }) {
  return (
    <Box
      sx={{
        width: '50vw',
        paddingLeft:'30%',
        position: 'relative',
        transform: 'translateY(-85%)',
      }}
    >
      <Stepper 
        activeStep={activeStep} 
        alternativeLabel
        connector={<CustomConnector />}
        sx={{
          gap: '4px',
          '& .MuiStepIcon-root': {
            color: '#89c2d9',
            transform: 'scale(2)',
            '&.Mui-active': {
              color: '#89c2d9',
              transform: 'scale(2.2)',
            },
            '&.Mui-completed': {
              color: '#C1DFF4',
              transform: 'scale(2)',
            },
          },
          '& .MuiStepLabel-label': {
            color: '#C1DFF4',
            fontSize: '1rem',
          },
          '& .MuiStepConnector-line': {
            borderColor: '#C1DFF4',
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}