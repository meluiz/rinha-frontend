import React from 'react'

import { FileCode } from '@phosphor-icons/react'
import { Center, Stack } from 'pandacss/jsx'

import { Text } from '@src/components/primitives'

const NoFileUploaded: React.FC = function () {
  return (
    <Center width="full" height="full" position="relative" pointerEvents="none">
      <Center color="neutral.950" fontSize="48px" role="figure">
        <FileCode weight="duotone" role="img" />
      </Center>
      <Stack align="center" justify="center" gap="4px">
        <Text color="neutral.700">
          <Text color="neutral.950" textDecoration="underline" as="span">
            Click to upload
          </Text>{' '}
          or drag and drop
        </Text>
        <Text fontSize="14px" color="neutral.500">
          Maximum file size: 150MB
        </Text>
      </Stack>
    </Center>
  )
}

export default NoFileUploaded
