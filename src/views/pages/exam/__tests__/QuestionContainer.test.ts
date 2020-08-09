import { mount } from '@vue/test-utils';
import { localVue } from '../../../../../setupTests';
import { IQuestion } from '@/types/Interface';
import { q3 } from '@/services/api/MockApiResponse';
import QuestionContainer from '@/views/pages/exam/QuestionContainer.vue';

describe('QuestionContainer.vue', () => {
  it('renders correctly', () => {
    const singleQuestion: IQuestion = q3;
    const questionTotalCount = 123;
    const readonly = false;
    const answer = undefined;
    
    // pass the `localVue` to the mount options
    const wrapper = mount(QuestionContainer, {
      localVue,
      propsData: { answer, readonly, singleQuestion, questionTotalCount }
    })
    
    expect(wrapper.text()).toContain(q3.questionText);
    expect(wrapper.text()).toContain(`Question ${q3.orderId} of 123`);
  })
})
