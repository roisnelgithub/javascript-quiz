import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { useQuestionsStore } from "../../../store/questions";

const Navigation = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);
  const nextQuestion = useQuestionsStore((state) => state.nextQuestion);
  const previousQuestion = useQuestionsStore((state) => state.previousQuestion);
  return (
    <Stack direction="row" justifyContent="space-between" alignItems={"center"}>
      <Typography fontSize={"1.4rem"}>
        {currentQuestion + 1}/{questions.length}
      </Typography>
      <Stack direction="row" spacing={1}>
        <IconButton onClick={previousQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        <IconButton
          onClick={nextQuestion}
          disabled={currentQuestion === questions.length - 1}
        >
          <ArrowForwardIos />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navigation;
