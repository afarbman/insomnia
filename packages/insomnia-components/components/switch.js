// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {|
  className?: string,
  onClick: (e: SyntheticEvent<HTMLDivElement>) => any,
  optionItems: Array<Object>,
|};

class Switch extends React.PureComponent<Props> {
  render() {
    const { className, onClick, optionItems } = this.props;
    const StyledSwitch: React.ComponentType<{}> = styled.div`
      margin:auto;
      .switch {
        position: relative;
        height: 34px;
        width: 140px;
        background: var(--hl-xs);
        border-radius: 17px;
      }
      .switch-label {
        position: relative;
        font-weight:bold;
        z-index: 2;
        float: left;
        width: 67px;
        line-height: 34px;
        font-size: 11px;
        color: rgba(0, 0, 0, 0.55);
        text-align: center;
        cursor: pointer;
        padding-top:0px;
      }
      .switch-label-off {
        padding-left: 2px;
      }
      .switch-label-on {
        padding-right: 2px;
      }
      .switch-input {
        display: none;
      }
      .switch-input:checked + .switch-label {
        color: var(--color-surprise);
        text-shadow: 0 1px rgba(255, 255, 255, 0.25);
      }
      .switch-input:checked + .switch-label-on ~ .switch-selection {
        left: 70px;
      }
      .switch-selection {
        position: absolute;
        z-index: 1;
        top: 3px;
        left: 2px;
        display: block;
        width: 65px;
        height: 26px;
        border-radius: 13px;
        background-color: #fff;
        border:1px solid #DCDCDC;
        box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.15);
        transition: left 0.20s ease-out;
      }
    `;
    return (
      <StyledSwitch className={className}>
      <div className="switch" onClick={onClick}>
      {optionItems.map((item, i) => {
        return <React.Fragment key={i}>
          <input type="radio" className="switch-input" name="switch" value={item.label} id={item.label} defaultChecked={item.selected ? 'defaultChecked' : ''}/>
          <label htmlFor={item.label} className={`switch-label ${i === 0 ? 'switch-label-off' : 'switch-label-on'}`}>{item.label}</label>
        </React.Fragment>;
       })}
       {/*
       <input type="radio" className="switch-input" name="view" value="week" id="week" />
        <label htmlFor="week" className="switch-label switch-label-on">DESIGN</label>
        <input type="radio" className="switch-input" name="view" value="month" id="month" checked />
        <label htmlFor="month" className="switch-label switch-label-off">DEBUG</label>
        */}
        <span className="switch-selection"></span>
      </div>
      </StyledSwitch>
    );
  }
}

export default Switch;