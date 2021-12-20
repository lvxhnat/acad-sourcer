import React from 'react'
import NoDataSkeleton from '../../skeleton/nodataskeleton'
import { Legend, LineChart, Line, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import colorpalette from '../../../functions/colors'

export default function MultiLineChart(props) {
  // data : (13) [{...}, {...}, {...}, {...}, ..., {...}]
  // {year: 2000, science: 1000}, ... // declare the keys here
  const dot = props.dot
  const interval = [undefined, null].includes(props.interval) ? 1 : props.interval
  const width = props.width
  const height = props.height
  const xaxisname = props.xaxisname
  const color = props.color
  const percentagetype =
    props.percentagetype !== undefined && props.percentagetype !== null
      ? props.percentagetype
      : false
  const data = props.data

  const keylist =
    data !== null && data !== undefined && data.length !== 0
      ? Object.keys(data[0]).filter(function (e) {
        return e !== xaxisname
      })
      : null

  const axisstyle = {
    fontSize: '0.8vw'
  }
  return (
    <React.Fragment>
      {data !== null && data !== undefined && data.length !== 0 ?
        (data.map(item => item['value']).reduce((a, b) => a + b) !== 0 ?
          <ResponsiveContainer width={width} height={height}>
            <LineChart data={data}>
              <XAxis
                dataKey={xaxisname}
                style={axisstyle}
                interval={interval}
                padding={{ right: 15, left: 10 }}
              />
              <YAxis style={axisstyle} style={axisstyle} padding={{ top: 5 }} />
              <Tooltip
                formatter={value => (percentagetype ? value + '%' : value)}
                wrapperStyle={{ fontSize: '0.9vw' }}
              />
              {Object.keys(data[0]).length > 2 ? <Legend wrapperStyle={{ fontSize: '0.8vw' }} /> : null}
              {keylist !== null
                ? keylist.map((key, i) => (
                  <Line key={i} type="monotone" dataKey={key} stroke={[undefined, null].includes(color) ? colorpalette[i] : color} dot={dot} />
                ))
                : keylist}
            </LineChart>
          </ResponsiveContainer> :
          <NoDataSkeleton />
        ) : (
          <NoDataSkeleton />
        )}
    </React.Fragment>
  )
}
