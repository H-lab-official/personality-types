import { Form, Button, Radio } from "antd";
import { useState } from "react";

const App = () => {
  const [questionnaireForm] = Form.useForm();

  const [answers, setAnswers] = useState({});

  const handleSubmit = () => {
    console.log(answers);
  };

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: value }));
  };
  const mbtiQuestions = [
    {
      id: 1,
      question: "Do you prefer spending time alone or with others?",
      options: [
        { id: 1, value: "E", label: "Alone" },
        { id: 2, value: "I", label: "With others" },
      ],
    },
    {
      id: 2,
      question:
        "When making decisions, are you more likely to rely on logic or your feelings?",
      options: [
        { id: 1, value: "T", label: "Logic" },
        { id: 2, value: "F", label: "Feelings" },
      ],
    },
    {
      id: 3,
      question: "Are you typically more organized or spontaneous?",
      options: [
        { id: 1, value: "J", label: "Organized" },
        { id: 2, value: "P", label: "Spontaneous" },
      ],
    },
    {
      id: 4,
      question:
        "Do you prefer to focus on the present moment or plan for the future?",
      options: [
        { id: 1, value: "S", label: "Present moment" },
        { id: 2, value: "N", label: "Future planning" },
      ],
    },
    {
      id: 5,
      question:
        "Are you more comfortable in structured, routine environments or flexible, adaptable ones?",
      options: [
        { id: 1, value: "J", label: "Structured and routine" },
        { id: 2, value: "P", label: "Flexible and adaptable" },
      ],
    },
    {
      id: 6,
      question:
        "When working on a project, do you prefer to work independently or collaborate with others?",
      options: [
        { id: 1, value: "I", label: "Independently" },
        { id: 2, value: "E", label: "Collaboratively" },
      ],
    },
    {
      id: 7,
      question:
        "Do you enjoy exploring new ideas and possibilities, or do you prefer to stick with what's familiar?",
      options: [
        { id: 1, value: "N", label: "Exploring new ideas" },
        { id: 2, value: "S", label: "Sticking with what's familiar" },
      ],
    },
    {
      id: 8,
      question:
        "In social situations, do you tend to take charge and lead, or do you prefer to follow and observe?",
      options: [
        { id: 1, value: "E", label: "Take charge and lead" },
        { id: 2, value: "I", label: "Follow and observe" },
      ],
    },
    {
      id: 9,
      question:
        "Are you more inclined to trust your instincts and gut feelings, or do you prefer to rely on concrete evidence and facts?",
      options: [
        { id: 1, value: "F", label: "Instincts and gut feelings" },
        { id: 2, value: "T", label: "Concrete evidence and facts" },
      ],
    },
    {
      id: 10,
      question:
        "Do you prefer to have a few close relationships or a wide circle of acquaintances?",
      options: [
        { id: 1, value: "I", label: "Few close relationships" },
        { id: 2, value: "E", label: "Wide circle of acquaintances" },
      ],
    },
    {
      id: 11,
      question:
        "When facing a problem, do you approach it in a methodical, step-by-step manner, or do you prefer to brainstorm and explore various possibilities?",
      options: [
        { id: 1, value: "S", label: "Methodical and step-by-step" },
        { id: 2, value: "N", label: "Brainstorm and explore possibilities" },
      ],
    },
    {
      id: 12,
      question:
        "Are you more energized by spending time with others or by having time to yourself?",
      options: [
        { id: 1, value: "E", label: "Spending time with others" },
        { id: 2, value: "I", label: "Having time to yourself" },
      ],
    },
    {
      id: 13,
      question:
        "Do you enjoy planning and organizing events, or do you prefer to go with the flow and adapt as things unfold?",
      options: [
        { id: 1, value: "J", label: "Planning and organizing" },
        { id: 2, value: "P", label: "Going with the flow" },
      ],
    },
    {
      id: 14,
      question:
        "Are you more interested in the big picture and overarching concepts, or do you prefer to focus on the details and specifics?",
      options: [
        { id: 1, value: "N", label: "Big picture and overarching concepts" },
        { id: 2, value: "S", label: "Details and specifics" },
      ],
    },
    {
      id: 15,
      question:
        "When communicating, do you prefer to be direct and straightforward, or do you tend to be more diplomatic and considerate of others' feelings?",
      options: [
        { id: 1, value: "T", label: "Direct and straightforward" },
        { id: 2, value: "F", label: "Diplomatic and considerate" },
      ],
    },
    {
      id: 16,
      question:
        "Do you prefer to make decisions quickly, or do you like to take your time and weigh all options before deciding?",
      options: [
        { id: 1, value: "J", label: "Quickly" },
        { id: 2, value: "P", label: "Take time to decide" },
      ],
    },
    {
      id: 17,
      question:
        "Are you more drawn to activities that involve physical movement and hands-on experiences, or do you prefer intellectual pursuits and mental challenges?",
      options: [
        {
          id: 1,
          value: "S",
          label: "Physical movement and hands-on experiences",
        },
        {
          id: 2,
          value: "N",
          label: "Intellectual pursuits and mental challenges",
        },
      ],
    },
    {
      id: 18,
      question:
        "Do you enjoy following a schedule and sticking to plans, or do you prefer to keep your options open and be spontaneous?",
      options: [
        {
          id: 1,
          value: "J",
          label: "Following a schedule and sticking to plans",
        },
        {
          id: 2,
          value: "P",
          label: "Keeping options open and being spontaneous",
        },
      ],
    },
    {
      id: 19,
      question:
        "When working on a team project, do you prefer clearly defined roles and responsibilities, or do you enjoy a more fluid and flexible approach?",
      options: [
        {
          id: 1,
          value: "J",
          label: "Clearly defined roles and responsibilities",
        },
        { id: 2, value: "P", label: "Fluid and flexible approach" },
      ],
    },
    {
      id: 20,
      question:
        "Are you more comfortable expressing your thoughts and emotions openly, or do you tend to keep them to yourself until you're sure of them?",
      options: [
        { id: 1, value: "E", label: "Express thoughts and emotions openly" },
        { id: 2, value: "I", label: "Keep thoughts and emotions to yourself" },
      ],
    },
    {
      id: 21,
      question:
        "Do you prefer environments that are quiet and peaceful, or do you thrive in lively and stimulating surroundings?",
      options: [
        { id: 1, value: "I", label: "Quiet and peaceful" },
        { id: 2, value: "E", label: "Lively and stimulating" },
      ],
    },
    {
      id: 22,
      question:
        "When faced with a difficult situation, do you prefer to rely on your own strengths and abilities to solve it, or do you seek support and guidance from others?",
      options: [
        { id: 1, value: "I", label: "Rely on own strengths and abilities" },
        { id: 2, value: "E", label: "Seek support and guidance from others" },
      ],
    },
    {
      id: 23,
      question:
        "Are you more inclined to follow established rules and procedures, or do you prefer to challenge norms and think outside the box?",
      options: [
        { id: 1, value: "J", label: "Follow established rules and procedures" },
        {
          id: 2,
          value: "P",
          label: "Challenge norms and think outside the box",
        },
      ],
    },
  ];

  return (
    <section className="flex justify-center">
      <article className="bg-white shadow-md rounded-lg px-6 py-2 mx-6 my-2 max-w-xl w-full">
        <Form form={questionnaireForm} layout="vertical" className="p-4">
          {mbtiQuestions.map((item) => (
            <Form.Item
              key={item.id}
              label={`${item.id}). ${item.question}`}
              name={`Q${item.id}`}
              className="font-bold"
            >
              <Radio.Group
                onChange={(e) => handleAnswerChange(item.id, e.target.value)}
                value={answers[item.id]}
                className="font-normal"
                key={item.id}
              >
                {item.options.map((option) => (
                  <Radio key={option.id} value={option.value}>
                    {option.label}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
          ))}

          <Form.Item>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </article>
    </section>
  );
};

export default App;
