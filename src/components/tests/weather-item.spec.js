
import { shallowMount } from '@vue/test-utils';
import WeatherItem from '../weather-item.vue';

describe('WeatherItem', () => {
    const renderWrapper = (props) => {
        return shallowMount(WeatherItem, { propsData: { ...props } });
    };

    it('should display name, region, country, temperature, condition', () => {
        const wrapper = renderWrapper({
            name: 'Custom name',
            region: 'custom region',
            country: 'country',
            tempInCelsius: 45.3,
            weatherCondition: 'Sunny',
            weatherIcon: 'https://t4.ftcdn.net/jpg/03/63/38/53/360_F_363385318_FGumiZOnWi4vRuaFJ2Df0KpidbzLp2fu.jpg'
        });

        expect(wrapper.text()).toBe('Name: Custom nameRegion: custom regionCountry: countryTemperature: 45.3 °CCondition: Sunny');
        expect(wrapper.element).toMatchSnapshot();
    })
})