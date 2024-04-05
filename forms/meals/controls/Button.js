import React, { Component, MouseEventHandler } from 'react';
import { observer } from 'mobx-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// import ReactTooltip from 'react-tooltip';

/*
export default observer(({
  onlyIcon = false,
  disabled = false,
  content = null,
  type = 'button',
  className,
  onClick,
  text,
  label,
  icon
}) => (
    <>
    <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={className}
    >

    {content ||
        <span>
            {icon}
            {!onlyIcon && <b className="dn di-ns"> {icon}</b>}
        </span>}
    </button>
    </>
));*/

function checkLabel(text, label) {
    // Check if the label is an integer or null/undefined
    if (Number.isInteger(parseInt(label)) || label == null) {
        return text;
    } else {
        // If label is not an integer or null/undefined, append it to the text
        return `${text} ${label}`;
    }
}

export default observer(({
    onlyIcon = false,
    disabled = false,
    content = null,
    type = 'button',
    className,
    onClick,
    text,
    label,
    icon
  }) => (
    <>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip>{checkLabel(text, label)}</Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <button
            {...triggerHandler}
            ref={ref}
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={className}
          >
            {content || (
              <span>
                {icon}
                {!onlyIcon && <b className="dn di-ns"> {checkLabel(text, label)}</b>}
              </span>
            )}
          </button>
        )}
      </OverlayTrigger>
    </>
  ));