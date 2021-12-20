import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

export default function AnalysisBox(props) {
  return (
    <React.Fragment>
      <Tabs>
        <TabList>
          <Tab> Corn </Tab>
          <Tab> Asset </Tab>
        </TabList>
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab> Overview </Tab>
              <Tab> Weather </Tab>
              <Tab> Supply & Demand </Tab>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabList>
          </Tabs>
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </React.Fragment>
  )
}
