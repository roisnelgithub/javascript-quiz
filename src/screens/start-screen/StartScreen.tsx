import { Button } from "@mui/material";
import { useQuestionsStore } from "../../store/questions";

const StartScreen = () => {
  const getQuestions = useQuestionsStore((state) => state.getQuestions);
  const handleStart = () => {
    getQuestions(5);
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ maxWidth: "120px" }}
        onClick={handleStart}
      >
        ¡Comenzar!
      </Button>
    </>
  );
};

export default StartScreen;
