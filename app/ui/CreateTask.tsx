'use client'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Button,
  Flex,
  Spacer,
  HStack,
  Heading,
  Text,
  Box,
  List,
  ListItem,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useState } from 'react'
// import { DeleteTask } from './DeleteTask'

export function CreateTask() {
  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure()
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure()
  const [task, setTask] = useState('')
  const [plan, setPlan] = useState<string[]>([])
  const [time, setTime] = useState<number | undefined>(undefined)
  const [plantime, setPlantime] = useState<number[]>([])
  const [edit, setEdit] = useState<string[]>([])

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(Number(e.target.value))
  }
  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleDelete = (index: number) => {
    setPlan((plan) => plan.filter((_, i) => i !== index))
    setPlantime((plantime) => plantime.filter((_, i) => i !== index))
  }

  const handleCreate = () => {
    if (task && time !== undefined) {
      setPlan((prevPlan) => [...prevPlan, task])
      setPlantime((prevPlantime) => [...prevPlantime, time])
      setTime(undefined)
      setTask('')
      onCreateClose()
    } else {
      console.log('Task or time is invalid')
    }
  }

  const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null)
  const [editPlanName, setEditPlanName] = useState('')
  const [editPlanTime, setEditPlanTime] = useState<number>(0)
  const handleSave = () => {
    if (currentEditIndex !== null) {
      const updatedPlans = [...plan]
      updatedPlans[currentEditIndex] = editPlanName
      setPlan(updatedPlans)

      const updatedPlanTimes = [...plantime]
      updatedPlanTimes[currentEditIndex] = editPlanTime
      setPlantime(updatedPlanTimes)
    }
    onEditClose()
  }

  // useState<string[]> = useState + <string[]>
  // <string[]> = data type: string & It is an array
  // useState<string[]>([])
  // ([]) is similar to boolean True/False,
  // it means the initial state is an empty array

  return (
    <>
      <Button onClick={onCreateOpen} leftIcon={<AddIcon />} colorScheme="blue">
        Add New Plan
      </Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isCreateOpen}
        onClose={onCreateClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Plan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Plan Name</FormLabel>
              <Stack spacing={3}>
                <Input
                  placeholder="ex: Frontend Project in 2 Months"
                  value={task}
                  onChange={handleTaskChange}
                />
                <Text>The Expected Time</Text>
                <Input
                  placeholder="how long"
                  value={time !== undefined ? time : ''}
                  onChange={handleTimeChange}
                />
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreate}>
              Create
            </Button>
            <Button colorScheme="red" onClick={onCreateClose} variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Plan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Text>Plan Name</Text>
              <Input
                value={editPlanName}
                onChange={(e) => setEditPlanName(e.target.value)}
              />
              <Text>Expected Time</Text>
              <Input
                type="number"
                value={editPlanTime}
                onChange={(e) => setEditPlanTime(Number(e.target.value))}
              />
            </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={3}>
              <Button colorScheme="blue" onClick={handleSave}>
                Save
              </Button>
              <Button colorScheme="red" onClick={onEditClose}>
                Cancel
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box mt={4}>
        <List display="flex" flexDirection="row">
          {plan.map((p, index) => {
            const time = plantime[index]
            return (
              <ListItem key={index} mr={3}>
                <Card>
                  <CardBody>
                    <Stack spacing={2}>
                      <Heading as="h4" size="md">
                        Plan Name {index + 1}
                      </Heading>
                      <Text>{p}</Text>
                      <Text fontSize="sm">{time} hours</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    {' '}
                    <Flex minWidth="max-content" alignItems="center" gap="2">
                      <IconButton
                        aria-label="Edit Plan"
                        icon={<EditIcon />}
                        onClick={() => {
                          setCurrentEditIndex(index)
                          setEditPlanName(plan[index])
                          setEditPlanTime(plantime[index])
                          onEditOpen()
                        }}
                        colorScheme="green"
                      />
                      <Spacer />
                      <IconButton
                        aria-label="Delete Plan"
                        icon={<DeleteIcon />}
                        onClick={() => handleDelete(index)}
                        colorScheme="red"
                      />
                    </Flex>
                  </CardFooter>
                </Card>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </>
  )
}
