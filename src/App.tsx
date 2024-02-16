import { Card, Container, Stack } from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import StartScreen from "./screens/start-screen/StartScreen";
import GameScreen from "./screens/game-screen/GameScreen";
import HeaderQuiz from "./components/header/HeaderQuiz";

function App() {
  const questions = useQuestionsStore((store) => store.questions);
  return (
    <Container maxWidth="xs" sx={{ mt: "2rem" }}>
      <Card variant="outlined" sx={{ p: { xs: "0.6rem", sm: "1rem" } }}>
        <Stack direction="column" spacing={2} alignItems={"center"}>
          <HeaderQuiz />
          {questions.length > 0 ? <GameScreen /> : <StartScreen />}
        </Stack>
      </Card>
    </Container>
  );
}

export default App;
