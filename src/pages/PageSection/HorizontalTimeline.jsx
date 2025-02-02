
import { Box, Stepper, Step, StepLabel, StepConnector, Typography, styled, Radio } from "@mui/material";

const steps = [
  {
    step: "Step 1",
    label: "Select Card Type",
    working: "In process",
  },
  {
    step: "Step 2",
    label: "Where to Share?",
    working: "Pending",
  },
  {
    step: "Step 3",
    label: "Select Employee?",
    working: "Pending",
  },
];

// Custom connector
const CustomConnector = styled(StepConnector)(() => ({
  '& .MuiStepConnector-line': {
    borderColor: '#6311CB', // Custom color for the horizontal line
  },
}));

// Custom StepIcon component
const StepIconComponent = ({ active, completed }) => {
  return (
    <Radio
      checked={active}
      disableRipple
      color="primary"
      sx={{
        paddingTop: 0,
        color: active || completed ? '#6311CB' : 'gray', // Custom color for active/completed step
        '& .MuiSvgIcon-root': {
          fontSize: 30,
        },
      }}
    />
  );
};

const HorizontalTimeline = () => {
  // Define the active step (you can change this based on state)
  const activeStep = 0; // Adjust to show the current step (0-based index)

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel connector={<CustomConnector />}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={StepIconComponent}>
              <Typography
                variant="body1"
                fontWeight={activeStep === index ? "lighter" : "normal"}
              >
                {step.step}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={activeStep === index ? "bold" : "normal"}
              >
                {step.label}
              </Typography>
              <Typography
                variant="caption"
                color={activeStep === index ? "primary" : "textSecondary"}
              >
                {step.working}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default HorizontalTimeline;
