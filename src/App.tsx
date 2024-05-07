import { Form, Button, Radio } from "antd";
import { useState } from "react";

const App = () => {
  const [questionnaireForm] = Form.useForm();

  const [answers, setAnswers] = useState({});
  const personalityTypeData = [
    {
      type: "ISTJ",
      introduction:
        "ISTJs are practical, logical, and organized. They are responsible and reliable, and they value tradition and loyalty.",
      strengths: [
        "reliable",
        "responsible",
        "logical",
        "practical",
        "organized",
      ],
      weaknesses: ["inflexible", "stubborn", "insensitive", "unimaginative"],
      job_search_guide:
        "ISTJs should look for jobs that allow them to use their logical and practical skills. They may enjoy working in fields such as accounting, engineering, or law enforcement.",
      recommender_role:
        "ISTJs make great team leaders and managers. They are reliable and responsible, and they can be counted on to get the job done.",
      workaholism_index: 7,
      percentage_of_people_in_type: 11.6,
    },
    {
      type: "ISFJ",
      introduction:
        "ISFJs are kind, caring, and responsible. They are loyal and reliable, and they value tradition and family.",
      strengths: ["kind", "caring", "responsible", "loyal", "reliable"],
      weaknesses: [
        "overly sensitive",
        "too selfless",
        "too modest",
        "vulnerable to criticism",
      ],
      job_search_guide:
        "ISFJs should look for jobs that allow them to use their caring and responsible nature. They may enjoy working in fields such as healthcare, education, or social work.",
      recommender_role:
        "ISFJs make great team members and supporters. They are kind and caring, and they can be counted on to help others.",
      workaholism_index: 6,
      percentage_of_people_in_type: 13.8,
    },
    {
      type: "INFJ",
      introduction:
        "INFJs are idealistic, creative, and compassionate. They are sensitive and intuitive, and they value deep connections with others.",
      strengths: [
        "idealistic",
        "creative",
        "compassionate",
        "sensitive",
        "intuitive",
      ],
      weaknesses: [
        "overly sensitive",
        "too idealistic",
        "too private",
        "difficult to get to know",
      ],
      job_search_guide:
        "INFJs should look for jobs that allow them to use their creativity and compassion. They may enjoy working in fields such as counseling, writing, or art.",
      recommender_role:
        "INFJs make great team leaders and mentors. They are idealistic and compassionate, and they can inspire others to reach their full potential.",
      workaholism_index: 8,
      percentage_of_people_in_type: 1.5,
    },
    {
      type: "INTJ",
      role: "Architect",
      imageUrl:
        "https://www.16personalities.com/static/images/personality-types/avatars/intj-architect.svg?v=3",
      introduction:
        "INTJs are strategic, logical, and independent. They are analytical and decisive, and they value knowledge and competence.",
      strengths: [
        "strategic",
        "logical",
        "independent",
        "analytical",
        "decisive",
      ],
      weaknesses: ["arrogant", "judgmental", "insensitive", "aloof"],
      job_search_guide:
        "INTJs should look for jobs that allow them to use their strategic and analytical skills. They may enjoy working in fields such as engineering, law, or business.",
      recommender_role:
        "INTJs make great team leaders and strategists. They are analytical and decisive, and they can help teams achieve their goals.",
      workaholism_index: 9,
      percentage_of_people_in_type: 2.1,
    },
    {
      type: "ISTP",
      introduction:
        "ISTPs are practical, analytical, and independent. They are spontaneous and adaptable, and they value freedom and autonomy.",
      strengths: [
        "practical",
        "analytical",
        "independent",
        "spontaneous",
        "adaptable",
      ],
      weaknesses: ["insensitive", "unemotional", "aloof", "impatient"],
      job_search_guide:
        "ISTPs should look for jobs that allow them to use their practical and analyticalskills. They may enjoy working in fields such as engineering, mechanics, or construction.",
      recommender_role:
        "ISTPs make great problem solvers and troubleshooters. They are practical and analytical, and they can quickly find solutions to complex problems.",
      workaholism_index: 5,
      percentage_of_people_in_type: 5.4,
    },
    {
      type: "ISFP",
      introduction:
        "ISFPs are artistic, sensitive, and caring. They are loyal and reliable, and they value authenticity and freedom.",
      strengths: ["artistic", "sensitive", "caring", "loyal", "reliable"],
      weaknesses: [
        "too sensitive",
        "unrealistic",
        "impulsive",
        "dislike rules",
      ],
      job_search_guide:
        "ISFPs should look for jobs that allow them to use their artistic and sensitive nature. They may enjoy working in fields such as art, music, or fashion.",
      recommender_role:
        "ISFPs make great team players and supporters. They are artistic and sensitive, and they can be counted on to bring creativity and empathy to the team.",
      workaholism_index: 4,
      percentage_of_people_in_type: 8.8,
    },
    {
      type: "INFP",
      introduction:
        "INFPs are idealistic, empathetic, and creative. They are sensitive and intuitive, and they value individuality and personal growth.",
      strengths: [
        "idealistic",
        "empathetic",
        "creative",
        "sensitive",
        "intuitive",
      ],
      weaknesses: [
        "too idealistic",
        "too sensitive",
        "impractical",
        "dislike conflict",
      ],
      job_search_guide:
        "INFPs should look for jobs that allow them to use their idealistic and creative nature. They may enjoy working in fields such as counseling, writing, or education.",
      recommender_role:
        "INFPs make great team leaders and mentors. They are idealistic and empathetic, and they can inspire others to reach their full potential.",
      workaholism_index: 6,
      percentage_of_people_in_type: 4.4,
    },
    {
      type: "INTP",
      role: "Logician",
      imageUrl:
        "https://www.16personalities.com/static/images/personality-types/avatars/intp-logician.svg?v=3",
      introduction:
        "INTPs are analytical, creative, and independent. They are logical and strategic, and they value knowledge and competence.",
      strengths: [
        "analytical",
        "creative",
        "independent",
        "logical",
        "strategic",
      ],
      weaknesses: ["arrogant", "insensitive", "aloof", "unrealistic"],
      job_search_guide:
        "INTPs should look for jobs that allow them to use their analytical and strategic skills. They may enjoy working in fields such as engineering, research, or consulting.",
      recommender_role:
        "INTPs make great team strategists and innovators. They are analytical and strategic, and they can help teams find new and creative solutions to complex problems.",
      workaholism_index: 7,
      percentage_of_people_in_type: 3.3,
    },
    {
      type: "ESTP",
      introduction:
        "ESTPs are outgoing, practical, and adventurous. They are spontaneous and adaptable, and they value freedom and autonomy.",
      strengths: [
        "outgoing",
        "practical",
        "adventurous",
        "spontaneous",
        "adaptable",
      ],
      weaknesses: ["insensitive", "unemotional", "impulsive", "dislike rules"],
      job_search_guide:
        "ESTPs should look for jobs that allow them to use their practical and adventurous nature. They may enjoy working in fields such as sales, marketing, or entrepreneurship.",
      recommender_role:
        "ESTPs make great team players and innovators. They are outgoing and practical, and they can bring energy and creativity to the team.",
      workaholism_index: 5,
      percentage_of_people_in_type: 4.3,
    },
    {
      type: "ESFP",
      introduction:
        "ESFPs are outgoing, artistic, and caring. They are loyal and reliable, and they value authenticity and freedom.",
      strengths: ["outgoing", "artistic", "caring", "loyal", "reliable"],
      weaknesses: [
        "too sensitive",
        "impulsive",
        "dislike rules",
        "unrealistic",
      ],
      job_search_guide:
        "ESFPs should look for jobs that allow them to use their artistic and caring nature. They may enjoy working in fields such as art, music, or fashion.",
      recommender_role:
        "ESFPs make great team players and supporters. They are outgoing and artistic, and they can be counted on to bring creativity and enthusiasm to the team.",
      workaholism_index: 4,
      percentage_of_people_in_type: 8.5,
    },
    {
      type: "ENFP",
      introduction:
        "ENFPs are outgoing, idealistic, and empathetic. They are sensitive and intuitive, and they value individuality and personal growth.",
      strengths: [
        "outgoing",
        "idealistic",
        "empathetic",
        "sensitive",
        "intuitive",
      ],
      weaknesses: [
        "too idealistic",
        "too sensitive",
        "impractical",
        "dislike conflict",
      ],
      job_search_guide:
        "ENFPs should look for jobs that allow them to use their idealistic and empathetic nature. They may enjoy working in fields such as counseling, writing, or education.",
      recommender_role:
        "ENFPs make great team leaders and innovators. They are outgoing and idealistic, and they can inspire others to reach their full potential.",
      workaholism_index: 6,
      percentage_of_people_in_type: 8.1,
    },
    {
      type: "ENTP",
      introduction:
        "ENTPs are outgoing, analytical, and creative. They are logical and strategic, and they value knowledge and competence.",
      strengths: ["outgoing", "analytical", "creative", "logical", "strategic"],
      weaknesses: ["arrogant", "insensitive", "aloof", "unrealistic"],
      job_search_guide:
        "ENTPs should look for jobs that allow them to use their analytical and creative skills. They may enjoy working in fields such as engineering, research, or consulting.",
      recommender_role:
        "ENTPs make great team strategists and innovators. They are outgoing and analytical, and they can help teams find new and creative solutions to complex problems.",
      workaholism_index: 7,
      percentage_of_people_in_type: 3.2,
    },
    {
      type: "ESTJ",
      introduction:
        "ESTJs are practical, logical, and responsible. They are organized and decisive, and they value tradition and loyalty.",
      strengths: [
        "practical",
        "logical",
        "responsible",
        "organized",
        "decisive",
      ],
      weaknesses: ["inflexible", "stubborn", "insensitive", "unimaginative"],
      job_search_guide:
        "ESTJs should look for jobs that allow them to use their practical and logical skills. They may enjoy working in fields such as accounting, engineering, or law enforcement.",
      recommender_role:
        "ESTJs make great team leaders and managers. They are practical and responsible, and they can be counted on to get the job done.",
      workaholism_index: 8,
      percentage_of_people_in_type: 8.7,
    },
    {
      type: "ESFJ",
      introduction:
        "ESFJs are kind, caring, and responsible. They are loyal and reliable, and they value tradition and family.",
      strengths: ["kind", "caring", "responsible", "loyal", "reliable"],
      weaknesses: [
        "overly sensitive",
        "too selfless",
        "too modest",
        "vulnerable to criticism",
      ],
      job_search_guide:
        "ESFJs should look for jobs that allow them to use their caring and responsible nature. They may enjoy working in fields such as healthcare, education, or social work.",
      recommender_role:
        "ESFJs make great team members and supporters. They are kind and caring, and they can be counted on to help others.",
      workaholism_index: 7,
      percentage_of_people_in_type: 12,
    },
    {
      type: "ENFJ",
      introduction:
        "ENFJs are idealistic, empathetic, and creative. They are sensitive and intuitive, and they value deep connections with others.",
      strengths: [
        "idealistic",
        "empathetic",
        "creative",
        "sensitive",
        "intuitive",
      ],
      weaknesses: [
        "overly sensitive",
        "too idealistic",
        "too private",
        "difficult to get to know",
      ],
      job_search_guide:
        "ENFJs should look for jobs that allow them to use their idealistic and creative nature. They may enjoy working in fields such as counseling, writing, or art.",
      recommender_role:
        "ENFJs make great team leaders and mentors. They are idealistic and empathetic, and they can inspire others to reach their full potential.",
      workaholism_index: 8,
      percentage_of_people_in_type: 2.5,
    },
  ];

  function calculateMBTI(obj: { [key: string]: string }) {
    const mbti: { [key: string]: number } = {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    };

    for (const key in obj) {
      const value = obj[key];
      mbti[value]++;
    }

    const preferences = ["EI", "SN", "TF", "JP"];
    const mbtiType = preferences
      .map((preference) => {
        const [first, second] = preference;
        return mbti[first] > mbti[second] ? first : second;
      })
      .join("");

    const personalityData = personalityTypeData.find(
      (personalityType) => personalityType.type === mbtiType
    );

    return personalityData;
  }

  const handleSubmit = () => {
    const result = calculateMBTI(answers);
    alert(
      `Type : ${result?.type}\nIntroduction : ${result?.introduction}\nStrengths : ${result?.strengths}\nRecommender Role : ${result?.recommender_role}\n`
    );
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
        <Form
          form={questionnaireForm}
          layout="vertical"
          className="p-4"
          onFinish={handleSubmit}
        >
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
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </article>
    </section>
  );
};

export default App;
