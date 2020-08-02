import {
  EQuestionType,
  IApiQuestionsPayload,
  IQuestion
} from '@/types/interface';

const q1: IQuestion = {
  orderId: 1,
  type: EQuestionType.singleSelect,
  questionText: 'Julius Caesar was the first emperor of Rome.',
  options: [
    {
      key: 'A',
      value: 'Yes',
    },
    {
      key: 'B',
      value: 'No',
    }
  ],
};
const q2: IQuestion = {
  orderId: 2,
  type: EQuestionType.freeText,
  questionText: '10*29*32*11 = ?',
};

export const apiPayload: IApiQuestionsPayload = {
  questionList: [q1, q2],
  pageControl: {
    numPerPage: 1,
  },
};
