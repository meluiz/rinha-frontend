import React from 'react'

import { FileCode } from '@phosphor-icons/react'
import { Str } from 'melper'
import { Center, HStack, Stack } from 'pandacss/jsx'

import { Text } from '@src/components/primitives'

interface FileUploadedProps {
  file: File
}

const FileUploaded: React.FC<FileUploadedProps> = function ({ file }) {
  return (
    <HStack width="full" gap="12px" pointerEvents="none">
      <Center
        width="40px"
        height="40px"
        rounded="9999px"
        bgColor="neutral.200"
        color="neutral.950"
        fontSize="20px"
        role="figure"
        pointerEvents="none"
      >
        <FileCode weight="duotone" role="img" />
      </Center>
      <Stack gap={0}>
        <Text fontSize="16px" color="neutral.800">
          {file.name}
        </Text>
        <Text fontSize="14px" color="neutral.500">
          {Str.prettyBytes(file.size, { space: true }).toLowerCase()}
        </Text>
      </Stack>
    </HStack>
  )
}

export default FileUploaded
