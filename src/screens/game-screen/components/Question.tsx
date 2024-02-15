import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Question } from "../../../types";
import { useQuestionsStore } from "../../../store/questions";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const getBackgroundColor = (question: Question, index: number) => {
  const { userSelectedAnswer, correctAnswer } = question;
  if (userSelectedAnswer == null) return "transparent";
  if (correctAnswer !== index && userSelectedAnswer !== index)
    return "transparent";
  if (correctAnswer === index) return "green";
  if (userSelectedAnswer === index) return "red";

  return "transparent";
};

const Question = ({ question }: { question: Question }) => {
  const selectAnswer = useQuestionsStore((state) => state.selectAnswer);

  // Función que devuelve una función
  // Equivalente a poner en el onClick={()=>selectedAnswer(question.id, index)}
  // En el onClick del ListItemButton
  const handleSelectedAnswer = (answerIndex: number) => () => {
    selectAnswer(question.id, answerIndex);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={1}>
          <Typography fontSize={"1.2rem"}>{question.question}</Typography>
          <Card variant="outlined" sx={{ p: "8px" }}>
            <SyntaxHighlighter language="javascript" style={docco}>
              {question.code}
            </SyntaxHighlighter>
          </Card>
          <List disablePadding>
            <Card variant="outlined">
              {question.answers.map((answer, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    divider
                    onClick={handleSelectedAnswer(index)}
                    disabled={question.userSelectedAnswer != null}
                    sx={{
                      backgroundColor: getBackgroundColor(question, index),
                    }}
                  >
                    <ListItemText sx={{ textAlign: "center" }}>
                      {answer}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </Card>
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Question;
