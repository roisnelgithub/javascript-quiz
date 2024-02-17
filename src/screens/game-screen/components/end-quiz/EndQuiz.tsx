import { Box, Modal, Stack, Typography } from "@mui/material";
import { useQuestionsStore } from "../../../../store/questions";
import { useQuestionData } from "../../../../hooks/useQuestionData";
import EndQuizHeader from "./EndQuizHeader";
import EndQuizContent from "./EndQuizContent";
import EndQuizFooter from "./EndQuizFooter";

interface EndQuizProps {
  isOpenModal: boolean;
  onClose: () => void;
}
const getDifficulty = (amount: number) => {
  if (amount === 5) return "Fácil";
  else if (amount === 10) return "Moderado";
  else return "Difícil";
};

const EndQuiz = ({ isOpenModal, onClose }: EndQuizProps) => {
  const questions = useQuestionsStore((state) => state.questions);

  const amountQuestions = useQuestionsStore((state) => state.amountQuestions);
  const { correct, incorrect } = useQuestionData();

  const difficulty = getDifficulty(amountQuestions);
  const score = (correct * 100) / questions.length;
  const isAchieved = score > 59;
  return (
    <Modal
      open={isOpenModal}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          placeContent: "center",
          top: "50%",
          left: "50%",
          margin: "auto",
          width: "270px",
          background: "aliceblue",
          borderRadius: "8px",
          pt: "3rem",
          px: "2rem",
          pb: "1rem",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Stack direction="column" spacing={3}>
          <EndQuizHeader score={score} />
          <Stack direction={"row"} justifyContent={"center"} spacing={1}>
            <Typography fontSize={"0.9rem"}>
              Dificultad: {difficulty}
            </Typography>
            <Typography fontSize={"0.9rem"}>|</Typography>

            <Typography
              fontSize={"0.9rem"}
              color={isAchieved ? "green" : "red"}
            >
              {isAchieved ? "Logrado" : "No conseguido"}
            </Typography>
          </Stack>
          <EndQuizContent
            score={score}
            correct={correct}
            incorrect={incorrect}
            questions={questions.length}
          />
          <EndQuizFooter onClose={onClose} />
        </Stack>
      </Box>
    </Modal>
  );
};

export default EndQuiz;
