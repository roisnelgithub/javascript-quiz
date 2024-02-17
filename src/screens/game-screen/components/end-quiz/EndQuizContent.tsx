import { Grid, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

interface EndQuizContentProps {
  correct: number;
  incorrect: number;
  questions: number;
  score: number;
}
const EndQuizContent = ({
  correct,
  incorrect,
  questions,
  score,
}: EndQuizContentProps) => {
  return (
    <Grid container px={2}>
      <Grid item xs={8}>
        <Stack direction="column" spacing={1}>
          <Stack direction="row" alignItems={"center"} gap={"4px"}>
            <QuestionMarkIcon color="info" sx={{ fontSize: "13px" }} />
            <Typography fontSize={"0.9rem"}>Preguntas: {questions}</Typography>
          </Stack>
          <Stack direction="row" alignItems={"center"} gap={"4px"}>
            <CheckIcon color="success" fontSize="inherit" />
            <Typography fontSize={"0.9rem"}>Correctas: {correct}</Typography>
          </Stack>
          <Stack direction="row" alignItems={"center"} gap={"4px"}>
            <CloseIcon color="error" fontSize="inherit" />
            <Typography fontSize={"0.9rem"}>
              Incorrectas: {incorrect}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ position: "relative", height: "80%" }}
        >
          <Typography variant="h4">{score}</Typography>

          <Typography
            fontSize="0.6rem"
            sx={{ position: "absolute", bottom: "5px" }}
          >
            Puntos
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default EndQuizContent;
