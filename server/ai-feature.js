import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
dotenv.config();


const skillLevel = "Intermediate";
const age = "20"
const desiredSubject = "Data Science";
const learningGoal = "To become proficient in machine learning algorithms";
const availableTime = 10;
const courseDuration = "Long-term";
const learningStyle = "Visual";
const careerGoal = "To become a Data Scientist in the healthcare industry";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Based on the following student information, provide course recommendations:
Current Skill Level: ${skillLevel} (e.g., Beginner, Intermediate, Advanced)
Age: ${age}
Desired Subject: ${desiredSubject}
Learning Goal: ${learningGoal}
Available Time: ${availableTime} hours per week
Preferred Course Duration: ${courseDuration} (e.g., Short-term, Long-term)
Learning Style Preference: ${learningStyle} (e.g., Visual, Auditory, Reading/Writing, Kinesthetic)
Career Goal: ${careerGoal}

Please provide a JSON response with the following structure:
{
  "recommendations": [
    {
      "courseName": "Course title",
      "platform": "Platform name",
      "difficulty": "Difficulty level",
      "duration": "Estimated duration",
      "description": "Brief course description",
      "relevance": "Why this course is recommended",
      "skillsGained": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ],
  "learningPathSuggestion": "A brief suggestion for a learning path",
  "additionalResources": ["Resource 1", "Resource 2"],
  "careerInsight": "A brief insight relating the recommendations to the career goal"
}

Provide 4 course recommendations in the JSON structure. focusing on the most recent and relevant courses in the field. If you're unsure about the exact release date of a course, provide your best estimate and indicate that it's an estimate.`
       

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

run();