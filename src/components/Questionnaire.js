import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const Questionnaire = () => {
  const questionsAndChoices = useSelector((state) => state.urlData.questions);

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Questions
      </Typography>
      {questionsAndChoices && questionsAndChoices.length > 0 ? (
        questionsAndChoices.map((item, index) => (
          <Card key={index} sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {item.question}
              </Typography>
              <FormControl>
                <RadioGroup name={`question-${index}`}>
                  {item.choices.map((choice, choiceIndex) => (
                    <FormControlLabel
                      key={choiceIndex}
                      value={choice}
                      control={<Radio />}
                      label={choice}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1" align="center">
          No questions available. Please submit a URL.
        </Typography>
      )}
    </Box>
  );
};

export default Questionnaire;
