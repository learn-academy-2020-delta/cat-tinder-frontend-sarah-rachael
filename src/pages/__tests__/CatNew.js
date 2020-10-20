import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CatNew from '../CatNew'

Enzyme.configure({ adapter: new Adapter() });

it('checks for text in a h3 tag', () => {
    const catNew = shallow(<CatNew />)
    expect(catNew.find('h3').text()).toEqual('Cat New')
})