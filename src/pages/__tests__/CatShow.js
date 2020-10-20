import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CatShow from '../CatShow'

Enzyme.configure({ adapter: new Adapter() });

it('checks for text in a h3 tag', () => {
    const catShow = shallow(<CatShow />)
    expect(catShow.find('h3').text()).toEqual('One Cat')
})