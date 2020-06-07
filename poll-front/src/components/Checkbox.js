import React from 'react'
import { ReactComponent as Checked} from './checked.svg'
import { ReactComponent as Unchecked} from './unchecked.svg'

const Checkbox = ({ selectedOption, option} ) => {
    if(selectedOption === option) {
        return <Checked style={{width: '2.5rem', height: '2.5rem'}}/>
    }
    else {
        return <Unchecked style={{width: '2.5rem', height: '2.5rem'}}/>
    }
}

export default Checkbox
