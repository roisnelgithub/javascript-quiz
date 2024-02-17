import { Box, Button, Grid, Stack } from "@mui/material";
import { useQuestionsStore } from "../../store/questions";
import Question from "./components/Question";
import Navigation from "./components/Navigation";
import Summary from "./components/Summary";
import { useQuestionData } from "../../hooks/useQuestionData";
import { useEffect, useState } from "react";
import { EndQuiz } from "./components/end-quiz";

const GameScreen = () => {
  const questions = useQuestionsStore((store) => store.questions);
  const currentQuestion = useQuestionsStore((store) => store.currentQuestion);
  const resetGame = useQuestionsStore((store) => store.resetGame);
  const question = questions[currentQuestion];

  const [isOpenEndGameModal, setIsOpenEndGameModal] = useState(false);
  const handleOpen = () => setIsOpenEndGameModal(true);
  const handleClose = () => setIsOpenEndGameModal(false);

  const { unanswered } = useQuestionData();
  useEffect(() => {
    if (unanswered === 0) {
      handleOpen();
    }
  }, [unanswered]);

  return (
    <Box
      sx={{
        width: { xs: "100%" },
      }}
    >
      <Stack direction="column" spacing={2}>
        <Grid container p={1} rowGap={3}>
          <Grid item xs={6}>
            <Summary />
          </Grid>
          <Grid item xs={6}>
            <Stack
              direction={"column-reverse"}
              alignItems={"flex-end"}
              sx={{ height: "100%" }}
            >
              <Navigation />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Question question={question} />
          </Grid>
        </Grid>
        <Stack direction={"row"} justifyContent={"flex-end"} p={"0.5rem"}>
          <Button
            variant="outlined"
            onClick={resetGame}
            size="small"
            sx={{ maxWidth: "120px", textTransform: "none" }}
          >
            Reiniciar quiz
          </Button>
        </Stack>
      </Stack>
      <EndQuiz isOpenModal={isOpenEndGameModal} onClose={handleClose} />
    </Box>
  );
};

export default GameScreen;
