import React from 'react'

export default function TextInput(props) {
  const textinputstyle = {
    border: '1px solid grey',
    padding: '3%',
    borderRadius: '3px',
    fontSize: props.fontSize !== null && props.fontSize !== undefined ? props.fontSize : '1.2vw',
    width: props.width,
    height: props.height,
    backgroundColor:
      props.background !== null && props.background !== undefined ? props.background : 'white',
    textAlign:
      props.textAlign !== null && props.textAlign !== undefined ? props.textAlign : 'center'
  }
  const value = props.valueplaceholder

  return (
    <React.Fragment>
      <input type="text" onChange={e => e} style={textinputstyle} value={value} />
    </React.Fragment>
  )
}
