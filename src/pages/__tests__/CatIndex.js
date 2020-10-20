import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CatIndex from '../CatIndex'

Enzyme.configure({ adapter: new Adapter() });

it('checks for text in a h3 tag', () => {
    const catIndex = shallow(<CatIndex />)
    expect(catIndex.find('h3').text()).toEqual('Cat Index')
})