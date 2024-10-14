import { HintData } from "@/model/hintdata"
import { Flex, HStack, Icon, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { MdAdd, MdCreate, MdDelete, MdEdit } from "react-icons/md"

import { tableHeader, tableKey } from "./column"

interface Props {
    data: HintData[]
    isLoading: boolean
}

const HintDataList = ({ data, isLoading }: Props) => {
    return (
        <TableContainer>
            <Table variant="simple">
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        {tableHeader.map((header, index) => (
                            <Th key={header + index}>{header}</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((hintdata) => {
                        return (
                            <Tr key={hintdata.id}>
                                {tableKey.map((key, index) => {
                                    if (key === "id") return <Td key={key + index}>{hintdata.id}</Td>
                                    if (key === "actions")
                                        return (
                                            <Td key={key + index}>
                                                <Flex alignItems="center" gap={2}>
                                                    <Icon as={MdEdit} cursor="pointer" />
                                                    <Icon as={MdDelete} cursor="pointer" />
                                                </Flex>
                                            </Td>
                                        )
                                    return <Td key={key + index}>{hintdata[key as keyof HintData]}</Td>
                                })}
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default HintDataList
