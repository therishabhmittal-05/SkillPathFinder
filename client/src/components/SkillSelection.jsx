import React, { useState } from 'react';

const initialSkillsList = [
  'MERN Stack',
  'Python',
  'Java',
  'C++',
  'JavaScript',
  'React',
  'Node.js',
  'Data Science',
  'Machine Learning',
  'UI/UX Design',
];

const SkillSelection = ({ onSkillsChange }) => {
  const [skillsList, setSkillsList] = useState(initialSkillsList);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleSkillToggle = (skill) => {
    setSelectedSkills((prevSkills) => {
      if (prevSkills.includes(skill)) {
        return prevSkills.filter((s) => s !== skill);
      } else {
        return [...prevSkills, skill];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSkillsChange(selectedSkills);
  };

  const handleAddNewSkill = (e) => {
    e.preventDefault();
    if (newSkill && !skillsList.includes(newSkill)) {
      setSkillsList([...skillsList, newSkill]);
      setSelectedSkills([...selectedSkills, newSkill]);
      setNewSkill('');
      setShowOtherInput(false);
    }
  };

  return (
    <div className="skill-selection">
      <h2>Select Your Skills</h2>
      <form onSubmit={handleSubmit}>
        <div className="skills-list">
          {skillsList.map((skill) => (
            <label key={skill} className="skill-item">
              <input
                type="checkbox"
                checked={selectedSkills.includes(skill)}
                onChange={() => handleSkillToggle(skill)}
              />
              {skill}
            </label>
          ))}
          <label className="skill-item">
            <input
              type="checkbox"
              checked={showOtherInput}
              onChange={() => setShowOtherInput(!showOtherInput)}
            />
            Other
          </label>
        </div>
        {showOtherInput && (
          <div className="other-skill-input">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter new skill"
            />
            <button onClick={handleAddNewSkill}>Add Skill</button>
          </div>
        )}
        <button type="submit">Submit Skills</button>
      </form>
    </div>
  );
};

export default SkillSelection;