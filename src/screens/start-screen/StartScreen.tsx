import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useQuestionsStore } from "../../store/questions";

import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SickIcon from "@mui/icons-material/Sick";

const StartScreen = () => {
  const getQuestions = useQuestionsStore((state) => state.getQuestions);
  const amountQuestions = useQuestionsStore((state) => state.amountQuestions);
  const isLoading = useQuestionsStore((state) => state.isLoading);
  const changeAmountQuestion = useQuestionsStore(
    (state) => state.changeAmountQuestion
  );
  const handleStart = () => {
    getQuestions(amountQuestions);
  };
  const handleSelectAmountQuestion = (event: SelectChangeEvent<number>) => {
    const amount = Number(event.target.value);
    changeAmountQuestion(amount);
  };

  return (
    <Stack
      direction="column"
      alignItems={"center"}
      spacing={3}
      sx={{ width: { xs: "230px", sm: "300px" } }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select" size="normal">
          Cantidad de preguntas
        </InputLabel>
        <Select
          labelId="demo-simple-select"
          id="demo-simple-select"
          value={amountQuestions}
          label="Cantidad de preguntas"
          fullWidth
          size="small"
          onChange={handleSelectAmountQuestion}
          disabled={isLoading}
        >
          <MenuItem value={5}>
            <Stack direction="row" spacing={1}>
              <SentimentVerySatisfiedIcon />
              <Typography>Fácil (5)</Typography>
            </Stack>
          </MenuItem>
          <MenuItem value={10}>
            <Stack direction="row" spacing={1}>
              <SentimentNeutralIcon />
              <Typography>Moderado (10)</Typography>
            </Stack>
          </MenuItem>
          <MenuItem value={15}>
            <Stack direction="row" spacing={1}>
              <SickIcon />
              <Typography>Difícil (15)</Typography>
            </Stack>
          </MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        sx={{ maxWidth: "150px" }}
        onClick={handleStart}
        disabled={isLoading}
        endIcon={isLoading && <CircularProgress size={24} color="inherit" />}
      >
        {isLoading ? "Cargando..." : "¡Comenzar!"}
      </Button>
    </Stack>
  );
};

export default StartScreen;
