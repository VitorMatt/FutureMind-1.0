import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
  'Review ad settings',
  'Set budget',
  'Launch campaign',
  'Monitor performance',
];

// Personalizando o conector para alterar a cor da linha entre os passos
const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${StepConnector.line}`]: {
    borderColor: '#C1DFF4', // Cor da linha conectando os passos
  },
}));

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
    <Box
      sx={{
        width: '50vw', // 50% da largura da viewport
        position: 'absolute', // Posiciona na lateral
        left: 0, // Alinha à esquerda
        top: '50%', // Centraliza verticalmente
        transform: 'translateY(-50%)', // Ajusta a posição
      }}
    >
      <Stepper 
        activeStep={1} 
        alternativeLabel
        connector={<CustomConnector />}
        sx={{
          gap: 0,
          '& .MuiStepIcon-root': {
            color: '#C1DFF4', // Define a cor dos ícones não completados
            '&.Mui-active': {
              color: '#C1DFF4', // Define a cor dos ícones ativos
            },
            '&.Mui-completed': {
              color: '#C1DFF4', // Define a cor dos ícones completados
            },
          },
          '& .MuiStepLabel-label': {
            color: '#C1DFF4', // Cor do texto dos rótulos dos passos
          },
          '& .MuiStepConnector-line': {
            borderColor: '#C1DFF4', // Cor da linha conectando os passos
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