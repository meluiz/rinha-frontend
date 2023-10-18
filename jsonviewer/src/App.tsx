import React from 'react'

import { Box, Container, HStack, Stack, styled } from 'pandacss/jsx'

import { Heading, Text } from '@src/components/primitives'
import { FileUpload } from '@src/components/shared'

const App: React.FC = function () {
  const [file, updateFile] = React.useState<File>()
  return (
    <Box width="full" height="auto" paddingY="78px" position="relative" display="block">
      <Container>
        <Stack
          width="full"
          shadow="md"
          padding="28px"
          border="1px solid"
          borderColor="neutral.200"
          rounded="12px"
          bgColor="white"
          gap="24px"
        >
          <Stack gap="4px">
            <Heading color="neutral.800" fontSize="24px">
              Upload and attach files
            </Heading>
            <Text color="neutral.400" fontSize="18px">
              Upload a JSON file to view on client side
            </Text>
          </Stack>
          <FileUpload onUpload={(file) => updateFile(file)} />
          <HStack>
            <styled.button
              width="full"
              height="50px"
              borderRadius="6px"
              color="neutral.50"
              fontWeight="semibold"
              cursor="pointer"
              bgColor="neutral.950"
              transition="all 100ms linear"
              _active={{ transform: 'scale(0.98)' }}
              _disabled={{ opacity: 0.4, cursor: 'not-allowed' }}
              disabled={!file}
            >
              Load File
            </styled.button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  )
}

export default App
