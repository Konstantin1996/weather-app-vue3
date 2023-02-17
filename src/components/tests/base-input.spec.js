
import { shallowMount } from '@vue/test-utils';
import BaseInput from '../base-input.vue';

describe('BaseInput', () => {
    const renderWrapper = (value) => {
        return shallowMount(BaseInput, { propsData: {
            value
        }})
    }

    it('should emit input event with new value', async () => {
        const wrapper = renderWrapper('');
        const input = wrapper.find('input');

        await input.setValue('new value'); 

        expect(wrapper.emitted().input[0][0]).toBe("new value");
    });

    it('can have initial value ', async () => {
        const wrapper = renderWrapper('initial value');
        const input = wrapper.find('input');

        expect(input.element.value).toBe('initial value');
    });
})