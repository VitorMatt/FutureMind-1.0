import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import Button from '@mui/material/Button';     
import { styled } from '@mui/material/styles';

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
    borderColor: '#C1DFF4', // Cor da linha conectando os passos
  },
}));

export default function HorizontalLinearAlternativeLabelStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <Box
      sx={{
        width: '30vw', // Diminuindo a largura para 30% da viewport
        marginLeft:"-20%",
        top: '50%', // Centraliza verticalmente
        transform: 'translateY(-85%)', // Ajusta a posição
      }}
    >
      <Stepper 
        activeStep={activeStep} 
        alternativeLabel
        connector={<CustomConnector />}
        sx={{
          gap: '4px', // Diminui o espaço entre cada passo
          '& .MuiStepIcon-root': {
            color: '#89C2D9', // Define a cor dos ícones não completados
            transform: 'scale(2)', // Aumenta o tamanho dos ícones
            '&.Mui-active': {
              color: '#89C2D9', // Define a cor dos ícones ativos
              transform: 'scale(2.2)', // Aumenta ainda mais os ícones ativos
            },
            '&.Mui-completed': {
              color: '#C1DFF4', // Define a cor dos ícones completados
              transform: 'scale(2)', // Define tamanho para ícones completados
            },
          },
          '& .MuiStepLabel-label': {
            color: '#C1DFF4', // Cor do texto dos rótulos dos passos
            fontSize: '1rem', // Ajusta o tamanho do texto para melhor proporção
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

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button 
          disabled={activeStep === 0} 
          onClick={handleBack}
          sx={{ color: '#C1DFF4' }}
        >
          Voltar
        </Button>
        <Button 
          disabled={activeStep === steps.length - 1} 
          onClick={handleNext}
          sx={{ color: '#C1DFF4' }}
        >
          Próximo
        </Button>
      </Box>
    </Box>
  );
}