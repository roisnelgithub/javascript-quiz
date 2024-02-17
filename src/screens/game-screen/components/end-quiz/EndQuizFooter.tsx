import { Button, Stack } from "@mui/material";
import { useQuestionsStore } from "../../../../store/questions";

interface EndQuizFooterProps {
  onClose: () => void;
}
const EndQuizFooter = ({ onClose }: EndQuizFooterProps) => {
  const resetGame = useQuestionsStore((state) => state.resetGame);
  return (
    <Stack direction="row-reverse" spacing={1} sx={{ pt: "1rem" }}>
      <Button
        variant="outlined"
        size="small"
        onClick={resetGame}
        sx={{ textTransform: "none", fontSize: "0.8rem" }}
      >
        Reiniciar
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={onClose}
        sx={{ textTransform: "none", fontSize: "0.8rem" }}
      >
        Ver Quiz
      </Button>
    </Stack>
  );
};

export default EndQuizFooter;
