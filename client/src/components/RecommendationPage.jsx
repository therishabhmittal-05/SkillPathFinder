import React from 'react';


const RecommendationPage = () => {
  const data={
    recommendations: [
      {
        courseName: 'Data Science Specialization',
        platform: 'Coursera',
        difficulty: 'Beginner',
        duration: '5 months',
        description: 'This specialization provides a comprehensive introduction to data science, covering topics such as data cleaning, analysis, visualization, and machine learning.',
        relevance: 'This specialization is a great starting point for beginners looking to gain a strong foundation in data science.',        
        skillsGained: [Array]
      },
      {
        courseName: 'Python for Data Science',
        platform: 'edX',
        difficulty: 'Beginner',
        duration: '3 months',
        description: 'This course introduces the basics of Python programming and its application in data science. Students will learn about data structures, data manipulation, and data visualization.',
        relevance: 'Python is a widely used programming language in data science, and this course provides a solid foundation for beginners.',
        skillsGained: [Array]
      },
      {
        courseName: 'Machine Learning',
        platform: 'Stanford Online',
        difficulty: 'Intermediate',
        duration: '6 months',
        description: 'This course provides a comprehensive overview of machine learning, covering topics such as supervised learning, unsupervised learning, and deep learning.',
        relevance: 'Machine learning is a core component of data science, and this course provides a strong foundation for intermediate learners.',
        skillsGained: [Array]
      },
      {
        courseName: 'Data Analytics with R',
        platform: 'DataCamp',
        difficulty: 'Intermediate',
        duration: '3 months',
        description: 'This course teaches students how to use the R programming language for data analysis and visualization. Students will learn about data cleaning, data manipulation, and statistical modeling.',
        relevance: 'R is a popular programming language in data science, and this course provides a valuable introduction for intermediate learners.',
        skillsGained: [Array]
      }
    ],
    learningPathSuggestion: 'Begin with the beginner courses to gain a strong foundation in data science. Once you have a good understanding of the basics, you can progress to the intermediate courses to learn more advanced topics such as machine learning and data analytics.',     
    additionalResources: [ 'Kaggle', 'TensorFlow', 'Scikit-learn' ],
    careerInsight: 'These courses will provide you with the skills and knowledge needed to enter the field of data science. Data scientists are in high demand, and these courses will help you develop the skills necessary to be successful in this field.'
  };
  const { recommendations, learningPathSuggestion, additionalResources, careerInsight } = data;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Your Personalized Learning Recommendations</h1>
        
        {/* Course Recommendations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Courses</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {recommendations.map((course, index) => (
              <div key={index} className="bg-white overflow-hidden shadow-lg rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{course.courseName}</h3>
                  <p className="mt-1 text-sm text-gray-500">{course.platform} • {course.difficulty} • {course.duration}</p>
                  <p className="mt-3 text-sm text-gray-700">{course.description}</p>
                  <p className="mt-3 text-sm font-medium text-indigo-600">Relevance: {course.relevance}</p>
                  <div className="mt-4">
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200 last:mr-0 mr-1">
                      {course.skillsGained.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Learning Path Suggestion */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-12">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Suggested Learning Path</h2>
            <p className="text-gray-700">{learningPathSuggestion}</p>
          </div>
        </div>
        
        {/* Additional Resources */}
        <div className="bg-white overflow-hidden shadow rounded-lg mb-12">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <ul className="list-disc list-inside text-gray-700">
              {additionalResources.map((resource, index) => (
                <li key={index}>{resource}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Career Insight */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Career Insight</h2>
            <p className="text-gray-700">{careerInsight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPage;