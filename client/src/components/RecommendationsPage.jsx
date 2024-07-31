import React, { useState, useEffect } from 'react';
import RecommendationPage from './RecommendationPage';

const RecommendationsPage = () => {
  const [recommendationData, setRecommendationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setIsLoading(true);
        // Replace this with your actual API call
        // const response = await fetch('http://localhost:3000/aifeature');
        const response={
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
        if (!response.ok) {
          throw new Error('Failed to fetch recommendations');
        }
        const data = await response.json();
        setRecommendationData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return <RecommendationPage data={recommendationData} />;
};

export default RecommendationsPage;

