import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useState } from 'react'
import { EditIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

export function EditModal(index) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // edit plan name
  const [editPlanName, setEditPlanName] = useState('')
  const [editPlanTime, setEditPlanTime] = useState<number>(0)

  return (
    <IconButton
      aria-label="Edit Plan"
      icon={<EditIcon />}
      onClick={() => {
        // setCurrentEditIndex(index)
        setEditPlanName(plan[index])
        setEditPlanTime(plantime[index])
        onOpen()
      }}
      colorScheme="green"
    />
  )
}
