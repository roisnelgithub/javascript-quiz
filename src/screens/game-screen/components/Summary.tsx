import { Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useQuestionData } from "../../../hooks/useQuestionData";
import { useQuestionsStore } from "../../../store/questions";

const Summary = () => {
  const { correct, incorrect, unanswered } = useQuestionData();
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);

  return (
    <Stack direction="column" spacing={1}>
      <Typography fontSize={"1rem"}>
        Preguntas: {currentQuestion + 1}/{questions.length}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Stack direction="row" alignItems={"center"}>
          <CheckIcon color="success" fontSize="inherit" />
          <Typography fontSize={"0.8rem"}>: {correct}</Typography>
        </Stack>
        <Stack direction="row" alignItems={"center"}>
          <CloseIcon color="error" fontSize="inherit" />
          <Typography fontSize={"0.8rem"}>: {incorrect}</Typography>
        </Stack>
        <Stack direction="row" alignItems={"center"}>
          <QuestionMarkIcon color="info" sx={{ fontSize: "13px" }} />
          <Typography fontSize={"0.8rem"}>: {unanswered}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Summary;
