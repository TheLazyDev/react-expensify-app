import React from 'react';
import {shallow} from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';


test('should render Header',()=>{
    // const renderer = new ReactShallowRenderer();

    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // // console.log(renderer.getRenderOutput());


    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
})
