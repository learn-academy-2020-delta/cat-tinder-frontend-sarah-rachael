import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CatEdit from '../CatEdit'

Enzyme.configure({ adapter: new Adapter() });

it('checks for text in a h3 tag', () => {
    const catEdit = shallow(<CatEdit />)
    expect(catEdit.find('h3').text()).toEqual('Cat Edit')
})