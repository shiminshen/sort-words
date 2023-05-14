
// normalize contentful response to questions data structure
export const normalizeQuestions = (questions: any) => {
  return questions.map((question: any, index: number) => {
    const { title, language, questions } = question.fields;
    return {
      id: index + 1,
      title,
      language,
      questions,
    };
  });
}
