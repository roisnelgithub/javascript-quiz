import { Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useQuestionData } from "../../../hooks/useQuestionData";
import { useQuestionsStore } from "../../../store/questions";

const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData();
  const resetGame = useQuestionsStore((state) => state.resetGame);

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={1} alignItems={"center"}>
        <CheckIcon color="success" />
        <Typography fontSize={"0.8rem"}>Correctas: {correct}</Typography>
        <CloseIcon color="error" />
        <Typography fontSize={"0.8rem"}>Incorrectas: {incorrect}</Typography>
        <QuestionMarkIcon color="info" sx={{ fontSize: "18px" }} />
        <Typography fontSize={"0.8rem"}>Sin responder: {unanswered}</Typography>
      </Stack>
      <Stack direction="row-reverse">
        <Button
          variant="outlined"
          size="small"
          sx={{ maxWidth: "100px" }}
          onClick={resetGame}
        >
          End Game
        </Button>
      </Stack>
    </Stack>
  );
};

export default Footer;
