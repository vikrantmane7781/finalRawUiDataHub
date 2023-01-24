import React, { Component } from 'react'
import "./Timeline.css";
import Tooltip from 'react-tooltip-lite';
import arow from "../assets/ar2.png";

export default class Timeline extends Component {
    constructor(props) {
        super(props);
    
        this.state = { tipOpen: false };
    
        this.toggleTip = this.toggleTip.bind(this);
        this.bodyClick = this.bodyClick.bind(this);
      }
    
      componentDidMount() {
        document.addEventListener('mousedown', this.bodyClick);
      }
    
      componentWillUnmount() {
        document.removeEventListener('mousedown', this.bodyClick);
      }
    
      tipContentRef;
    
      buttonRef;
    
      toggleTip() {
        this.setState(prevState => ({ tipOpen: !prevState.tipOpen }));
      }
    
      bodyClick(e) {
        if ((this.tipContentRef && this.tipContentRef.contains(e.target)) || this.buttonRef.contains(e.target)) {
          return;
        }
    
        this.setState({ tipOpen: false });
      }
      
      render() {
        const { tipOpen } = this.state;
        return (
          <div className="wrapper">
            
           
            <section className='section'>
                
              <div className="flex-spread">
                <div className='inner_time'>
                <img className="arow" src={arow} height="50px" style={{marginRight:"1px"}} width="50px" />
                <Tooltip padding={20} content="By default the text is above the element" className="target" tipContentClassName="foo">
                <span className='tooltip_heading'>1</span>
                </Tooltip>
                </div>

                <div className='inner_time'>
                <img className="arow" src={arow} height="50px" width="50px" />
                <Tooltip content="It'll center if it has room" className="target" tipContentClassName="">
                    <span className='tooltip_heading'>2</span>
                </Tooltip>
                </div>

                <div className='inner_time'>
                <img className="arow" src={arow} height="50px" width="50px" />
                <Tooltip content="It'll center if it has room" className="target" tipContentClassName="">
                <span className='tooltip_heading'>3</span>
                </Tooltip>
                </div>

                <div className='inner_time'>
                <img className="arow" src={arow} height="50px" width="50px" />
                <Tooltip onToggle={(isOpen) => { console.log(`Is tooltip open ? \n Answer : ${isOpen ? 'Yes' : 'No'}`); }} content="alert shown" className="target" tipContentClassName="">
                <span className='tooltip_heading'>4</span>
                </Tooltip>
                </div>

                <div className='inner_time'>
                <img className="arow" src={arow} height="50px" width="50px" />
                <Tooltip onToggle={(isOpen) => { console.log(`Is tooltip open ? \n Answer : ${isOpen ? 'Yes' : 'No'}`); }} content="alert shown" className="target" tipContentClassName="">
                <span className='tooltip_heading'>5</span>
                </Tooltip>
                <img className="arow" src={arow} height="50px" width="50px" />
                </div>
              </div>
            </section>
    
          </div>
        );
      }
}
