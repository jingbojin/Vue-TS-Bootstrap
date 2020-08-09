import { mount } from '@vue/test-utils';
import FreeText from '@/views/components/FreeText.vue';
import { localVue } from '../../../../setupTests';
import { q1 } from '@/services/api/MockApiResponse';

describe('FreeText.vue', () => {
  it('renders props when passed', () => {
    const answer = 'a user entered answer';
    const readonly = true;
    const singleQuestion = q1;
    
    // pass the `localVue` to the mount options
    const wrapper = mount(FreeText, {
      localVue,
      propsData: { answer, readonly, singleQuestion }
    })
    expect(wrapper.find('textarea').attributes('placeholder'))
      .toBe(answer);
  })
})
