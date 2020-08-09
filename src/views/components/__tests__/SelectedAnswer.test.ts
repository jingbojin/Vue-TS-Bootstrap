import { mount } from '@vue/test-utils';
import { localVue } from '../../../../setupTests';
import { q3 } from '@/services/api/MockApiResponse';
import SelectedAnswer from '@/views/components/SelectedAnswer.vue';
import { IOption } from '@/types/Interface';

describe('SelectedAnswer.vue', () => {
  it('test rendering', () => {
    const options = q3.options;
    const answer = (q3.options as IOption[])[0].key;
    
    // pass the `localVue` to the mount options
    const wrapper = mount(SelectedAnswer, {
      localVue,
      propsData: { options, answer }
    })
    
    expect(wrapper.text()).toContain( (q3.options as IOption[])[0].value);
    expect(wrapper.text()).toContain( (q3.options as IOption[])[1].value);
  })
})
