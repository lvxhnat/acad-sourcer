import React from 'react'
import { BarChart, Bar, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'

import NoDataSkeleton from '../../skeleton/nodataskeleton'
import colorpalette from '../../../functions/colors'
import { tickFormatter } from '../../../functions/main'

export default function GroupedBarChart(props) {
  // Takes in sample data in the example format:
  // [{...}, {...}, {...}, {...}]
  // > 0: {name: 'Arts', Applied Arts: 50, Art History: 10, Literature: 1345}
  const data = props.groupedbarchartdata
  const width = props.width
  const height = props.height !== undefined ? props.height : 400
  const axisstyle = {
    fontSize: '0.7vw'
  }

  return (
    <React.Fragment>
      {data !== null && data !== undefined ? (
        (data.length !== 0 ?
          <ResponsiveContainer height={height} width={width}>
            <BarChart
              barCategoryGap={2}
              layout="vertical"
              data={data}
              margin={{ left: 10, right: 10, paddingBottom: '5%' }}>
              <XAxis hide type="number" wrapperstyle={axisstyle} />
              <YAxis
                tickFormatter={tickFormatter}
                style={axisstyle}
                width={130}
                type="category"
                dataKey="name"
                interval={0}
              />
              <Tooltip wrapperStyle={{ fontSize: '0.9vw' }} />
              {data.length !== undefined
                ? data.map((items, i) =>
                  Object.keys(items).map((item, o) =>
                    item !== 'name' && item !== 'all' ? (
                      <Bar
                        key={data.length.toString() + i + o} // This allows the key update to be dynamic, which changes the object state on update
                        dataKey={item}
                        fill={colorpalette[o % colorpalette.length]}
                        stackId="a"
                      />
                    ) : null
                  )
                )
                : null}
            </BarChart>
          </ResponsiveContainer> :
          <NoDataSkeleton />
        )
      ) : (
        <NoDataSkeleton />
      )}
    </React.Fragment>
  )
}
