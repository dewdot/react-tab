import { useState } from "react";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <>
      <div className="tab-container">
        <div className="tab-menu">
          <div className={toggleState === 1 ? 'tab-title tab-active' : 'tab-title'} onClick={() => toggleTab(1)}>Tab One</div>
          <div className={toggleState === 2 ? 'tab-title tab-active' : 'tab-title'} onClick={() => toggleTab(2)}>Tab Two</div>
          <div className={toggleState === 3 ? 'tab-title tab-active' : 'tab-title'} onClick={() => toggleTab(3)}>Tab Three</div>
        </div>
        <div className="tab-contents">
          <div className={toggleState === 1 ? 'tab-content tab-content-active' : 'tab-content'}>
            <h4>Content One</h4>
            <p>This is some description for tab one content</p>
          </div>
          <div className={toggleState === 2 ? 'tab-content tab-content-active' : 'tab-content'}>
            <h4>Content Two</h4>
            <p>Lorem ipsum is a cool dummy placeholder text.</p>
          </div>
          <div className={toggleState === 3 ? 'tab-content tab-content-active' : 'tab-content'}>
            <h4>Content Three</h4>
            <p>My tab three description is here.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tab;