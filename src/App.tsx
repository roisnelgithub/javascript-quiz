import { Container } from "@mui/material";
import HeaderQuiz from "./components/header/HeaderQuiz";
import StartScreen from "./screens/start-screen/StartScreen";
import { useQuestionsStore } from "./store/questions";

function App() {
  const questions = useQuestionsStore((store) => store.questions);
  return (
    <>
      <main>
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            placeContent: "center",
            placeItems: "center",
          }}
        >
          <HeaderQuiz />
          {questions.length > 0 ? "Juego" : <StartScreen />}
        </Container>
      </main>
    </>
  );
}

export default App;
