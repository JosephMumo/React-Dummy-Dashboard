import { ChartBarIcon, ChartPieIcon } from '@heroicons/react/outline'
import { BarList, Button, Card, Flex, LineChart, Metric, Title, DonutChart, BarChart} from '@tremor/react'
import React, { useState } from 'react'

function Stats() {
  const cities = [
    {
      name: "New York",
      sales: 9800,
    },
    {
      name: "London",
      sales: 4567,
    },
    {
      name: "Hong Kong",
      sales: 3908,
    },
    {
      name: "San Francisco",
      sales: 2400,
    },
    {
      name: "Singapore",
      sales: 1908,
    },
    {
      name: "Zurich",
      sales: 1398,
    },
  ];
  
  const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

  const [ show, setShow ] = useState(true)
  
  return (
    <Card className='w-full text-center'>
        <Flex flexDirection='col'>
            <Title>Overview</Title>
            <br />
            <section className='space-x-2'>
                <Button icon={ChartPieIcon} onClick={() => setShow(true)}>Chart</Button>
                <Button icon={ChartBarIcon} onClick={() => setShow(false)}>List</Button>
            </section>
        </Flex>
        <br />
        <Title>Sales</Title>
        {show ? 
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
          :
          <BarChart 
            className='mt-6'
            data={cities}
            categories={['sales']}
            color={['blue']}
            valueFormatter={valueFormatter}
            yAxisWidth={48}
          />
        }
    </Card>
  )
}

export default Stats