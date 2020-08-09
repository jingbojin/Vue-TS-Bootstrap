import { shallowMount } from '@vue/test-utils';
import { localVue } from '../../../../setupTests';
import { q3 } from '@/services/api/MockApiResponse';
import MultiCheckbox from '@/views/components/MultiCheckbox.vue';

/**
 * Testing with Vue TS:
 * https://github.com/vuejs/vue-test-utils/issues/255
 */

describe('MultiCheckbox.vue', () => {
  it('test bootstrapOptions()', () => {
    const readonly = false;
    const singleQuestion = q3;
    const answer = undefined;
    
    // pass the `localVue` to the mount options
    const wrapper = shallowMount(MultiCheckbox, {
      localVue,
      propsData: { readonly, singleQuestion, answer }
    })
    
    const actual = (wrapper.vm as any).bootstrapOptions;
    
    const expectedResult = [
      { text: 'A) Nicole Kidman', value: 'A', disabled: false },
      { text: 'B) Tom Hanks', value: 'B', disabled: false },
      { text: 'C) Robert Jr.', value: 'C', disabled: false },
      { text: 'D) Chirs Hamswas', value: 'D', disabled: false }
    ];
    expect(actual).toEqual(expectedResult);
  })
})
