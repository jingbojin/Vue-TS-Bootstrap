import { mount } from '@vue/test-utils';
import QuestionTitle from '@/views/pages/exam/QuestionTitle.vue';
import { localVue } from '../../../../../setupTests';

describe('QuestionTitle.vue', () => {
  it('renders props when passed', () => {
    const questionText = 'This is the text of a question';
    
    // pass the `localVue` to the mount options
    const wrapper = mount(QuestionTitle, {
      localVue,
      propsData: { questionText }
    })
    expect(wrapper.text()).toMatch(questionText);
  })
})
