import { shallowMount } from '@vue/test-utils';
import { localVue } from '../../../../setupTests';
import { q3 } from '@/services/api/MockApiResponse';
import { IOption } from '@/types/Interface';
import SingleChoice from '@/views/components/SingleChoice.vue';

describe('SingleChoice.vue', () => {
  it('test rendering', () => {
    const readonly = false;
    const singleQuestion = q3;
    const value = (q3.options as IOption[])[0].key;
    
    // pass the `localVue` to the mount options
    const wrapper = shallowMount(SingleChoice, {
      localVue,
      propsData: { readonly, singleQuestion, value }
    })
    
    expect(wrapper.text()).toContain( (q3.options as IOption[])[0].value);
    expect(wrapper.text()).toContain( (q3.options as IOption[])[1].value);
  })
})
