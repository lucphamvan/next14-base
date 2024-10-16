import Loading from "@/design-system/loading"
import useColor from "@/hook/useColor"
import { HintData } from "@/model/hintdata"
import { Flex, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr } from "@chakra-ui/react"
import { MdCreate, MdDelete } from "react-icons/md"
import { TbLocationSearch } from "react-icons/tb"

import { tableHeader } from "./column"

interface Props {
    data: HintData[]
    isLoading: boolean
    openEditHintForm: (hint: HintData) => void
    openDeleteHintForm: (hint: HintData) => void
    openValidateHintForm: (hint: HintData) => void
}

interface TooltipIconProps {
    icon: any
    onClick: () => void
    label: string
}
const TooltipIcon = ({ icon, onClick, label }: TooltipIconProps) => (
    <Tooltip label={label} bg="gray.300" color="black" placement="auto">
        <span>
            <Icon as={icon} cursor="pointer" onClick={onClick} _hover={{ color: useColor().Primary }} />
        </span>
    </Tooltip>
)

const HintDataList = ({ data, isLoading, openEditHintForm, openDeleteHintForm, openValidateHintForm }: Props) => {
    if (isLoading) {
        return <Loading boxSize={30} />
    }

    return (
        <TableContainer userSelect="none">
            <Table variant="simple" userSelect="text">
                <Thead>
                    <Tr>
                        {tableHeader.map((header, index) => (
                            <Th key={header + index}>{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map(({ id, username, catalog, hint }, index) => (
                        <Tr key={id}>
                            <Td>{index + 1}</Td>
                            <Td>{username}</Td>
                            <Td>******</Td>
                            <Td>{catalog}</Td>
                            <Td>{hint}</Td>
                            <Td>
                                <Flex alignItems="center" gap="3">
                                    <TooltipIcon
                                        icon={TbLocationSearch}
                                        onClick={() => openValidateHintForm({ id, username, catalog, hint })}
                                        label="Verify"
                                    />
                                    <TooltipIcon icon={MdCreate} onClick={() => openEditHintForm({ id, username, catalog, hint })} label="Update" />
                                    <TooltipIcon icon={MdDelete} onClick={() => openDeleteHintForm({ id, username, catalog, hint })} label="Delete" />
                                </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default HintDataList
