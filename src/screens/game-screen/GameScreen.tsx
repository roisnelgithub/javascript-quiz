import { Box, Stack } from "@mui/material";
import { useQuestionsStore } from "../../store/questions";
import Question from "./components/Question";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const GameScreen = () => {
  const questions = useQuestionsStore((store) => store.questions);
  const currentQuestion = useQuestionsStore((store) => store.currentQuestion);
  const question = questions[currentQuestion];
  return (
    <Box sx={{ width: { xs: "300px", sm: "350px" } }}>
      <Stack direction="column" spacing={1}>
        <Navigation />
        <Question question={question} />
        <Footer />
      </Stack>
    </Box>
  );
};

export default GameScreen;
