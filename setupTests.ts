import { createLocalVue, mount } from '@vue/test-utils'
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue';

/**
 * https://stackoverflow.com/questions/51536537/running-jest-with-bootstrap-vue
 * https://vue-test-utils.vuejs.org/guides/common-tips.html#applying-global-plugins-and-mixins
 */

// create an extended `Vue` constructor
export const localVue = createLocalVue();

// install plugins as normal
localVue.use(BootstrapVue);
localVue.use(BootstrapVueIcons);
