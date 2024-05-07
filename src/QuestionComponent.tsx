import { Form, Radio } from "antd";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: { id: number; value: string; label: string }[];
}

const QuestionComponent: React.FC<Question> = ({ id, question, options }) => {
  const [answer, setAnswer] = useState<string | undefined>(undefined);

  const handleAnswerChange = (value: string) => {
    setAnswer(value);
  };

  return (
    <Form.Item
      label={`${id}). ${question}`}
      name={`Q${id}`}
      className="font-bold"
    >
      <Radio.Group
        onChange={handleAnswerChange}
        value={answer}
        className="font-normal"
      >
        {options.map((option) => (
          <Radio key={option.id} value={option.value}>
            {option.label}
          </Radio>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export default QuestionComponent;
