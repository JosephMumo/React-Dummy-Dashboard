import React from 'react'
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react'

function Card1(props) {
  return (
    <Card className="max-w-full min-h-auto" decoration="top" decorationColor="indigo">
        <Flex justifyContent='between' alignItems='center'>
          <Text>{props.month}</Text>
          <BadgeDelta isIncreasePositive={true} deltaType='moderateIncrease' size='xs'>
            +12%
          </BadgeDelta>
        </Flex>
        <Metric>$ {props.sales}</Metric>
    </Card>
  )
}

export default Card1