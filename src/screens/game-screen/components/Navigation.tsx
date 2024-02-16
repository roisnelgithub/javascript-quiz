import { Button, Stack, useMediaQuery } from "@mui/material";
import { useQuestionsStore } from "../../../store/questions";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

const Navigation = () => {
  const matches = useMediaQuery("(min-width:380px)");
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const nextQuestion = useQuestionsStore((state) => state.nextQuestion);
  const previousQuestion = useQuestionsStore((state) => state.previousQuestion);
  return (
    <Stack direction="row">
      <Stack direction="row" spacing={1}>
        <Button
          size="small"
          variant="outlined"
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          sx={{
            textTransform: "none",
            fontSize: "0.8rem",
            minWidth: matches ? "64px" : "35px",
          }}
        >
          {matches ? "Anterior" : <ArrowBackIosNew />}
        </Button>
        <Button
          size="small"
          variant="outlined"
          onClick={nextQuestion}
          disabled={currentQuestion === questions.length - 1}
          sx={{
            textTransform: "none",
            fontSize: "0.8rem",
            minWidth: matches ? "64px" : "35px",
          }}
        >
          {matches ? " Siguiente" : <ArrowForwardIos />}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navigation;
