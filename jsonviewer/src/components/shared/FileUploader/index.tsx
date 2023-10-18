import React from 'react'

import { HTMLStyledProps, styled } from 'pandacss/jsx'
import { match } from 'ts-pattern'

import { useDisclosure } from '@src/hooks/use-disclosure'

import FileUploaded from './elements/FileUploaded'
import NoFileUploaded from './elements/NoFileUploaded'

export type FileUploaderProps = HTMLStyledProps<'input'> & {
  onUpload?: (file?: File) => void
}

export const FileUpload: React.FC<FileUploaderProps> = function ({ onChange, onUpload, ...props }) {
  const disclosure = useDisclosure()
  const [file, updateFile] = React.useState<File>()

  const handleChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (onChange) {
        onChange(ev)
      }

      if (onUpload) {
        const files = ev.target.files

        onUpload(files ? files[0] : undefined)
        updateFile(files ? files[0] : undefined)
      }
    },
    [onChange, onUpload],
  )

  const handleDragEnter = React.useCallback(
    (ev: React.DragEvent) => {
      ev.preventDefault()
      ev.stopPropagation()

      disclosure.onOpen()
    },
    [disclosure],
  )

  const handleDragLeave = React.useCallback(
    (ev: React.DragEvent) => {
      ev.preventDefault()
      ev.stopPropagation()

      disclosure.onClose()
    },
    [disclosure],
  )

  const handleDrop = React.useCallback(
    (ev: React.DragEvent) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (onUpload) {
        const files = ev.dataTransfer.files
        onUpload(files ? files[0] : undefined)
        updateFile(files ? files[0] : undefined)
      }

      disclosure.onClose()
    },
    [disclosure, onUpload],
  )

  return (
    <styled.label
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      rounded="8px"
      borderWidth="2px"
      borderStyle={file ? 'solid' : 'dashed'}
      borderColor={disclosure.isOpen ? 'blue.600' : 'neutral.200'}
      bgColor={disclosure.isOpen ? 'blue.50' : 'transparent'}
      position="relative"
      padding={disclosure ? '18px 24px' : '32px'}
      cursor="pointer"
      transition="all 200ms ease"
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      {match(!!file)
        .with(true, () => <FileUploaded file={file!} />)
        .with(false, () => <NoFileUploaded />)
        .exhaustive()}
      <styled.input
        type="file"
        accept="application/json"
        position="absolute"
        top={0}
        left={0}
        width={0}
        height={0}
        opacity={0}
        visibility="hidden"
        pointerEvents="none"
        userSelect="none"
        zIndex={-1}
        {...props}
        onChange={handleChange}
      />
    </styled.label>
  )
}
