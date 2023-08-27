import React from 'react'
import { TABS } from './redux/type'
import { useDispatch } from 'react-redux'
import { toggleTab } from './redux/actions';
function Tabs({currentTab}) {
    const dispatch = useDispatch();
    
    return (
      
        
        TABS.map(tab => (
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
        
    

    )
}

export default Tabs;
