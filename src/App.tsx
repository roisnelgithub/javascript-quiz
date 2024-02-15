import { Container, Stack } from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import HeaderQuiz from "./components/header/HeaderQuiz";
import StartScreen from "./screens/start-screen/StartScreen";
import GameScreen from "./screens/game-screen/GameScreen";

function App() {
  const questions = useQuestionsStore((store) => store.questions);
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
        placeItems: "center",
        height: "100vh",
      }}
    >
      <Stack direction="column" spacing={3}>
        <header>
          <HeaderQuiz />
        </header>
        <main>{questions.length > 0 ? <GameScreen /> : <StartScreen />}</main>
      </Stack>
    </Container>
  );
}

export default App;
