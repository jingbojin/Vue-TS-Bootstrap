import {
  EQuestionType,
  IApiQuestionsPayload,
  IQuestion
} from '@/types/Interface';

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
const q3: IQuestion = {
  orderId: 3,
  type: EQuestionType.multiCheckbox,
  questionText: 'Who is the Australian actor?',
  options: [
    {
      key: 'A',
      value: 'Nicole Kidman',
    },
    {
      key: 'B',
      value: 'Tom Hanks',
    },
    {
      key: 'C',
      value: 'Robert Jr.',
    },
    {
      key: 'D',
      value: 'Chirs Hamswas',
    }
  ],
};

export const apiPayload: IApiQuestionsPayload = {
  questionList: [q1, q2, q3],
  pageControl: {
    numPerPage: 1,
  },
};
