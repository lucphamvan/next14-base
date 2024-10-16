import Loading from "@/design-system/loading"
import { HintData, HintFormDataInput } from "@/model/hintdata"
import { Flex, Icon, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { MdCreate, MdDelete } from "react-icons/md"
import { TbLocationSearch } from "react-icons/tb"

import { tableHeader } from "./column"

interface Props {
    data: HintData[]
    isLoading: boolean
    openEditHintForm: (hintData: HintFormDataInput) => void
    openDeleteHintForm: (hint: HintData) => void
    openValidateHintForm: (id: string) => void
}

const HintDataList = ({ data, isLoading, openEditHintForm, openDeleteHintForm }: Props) => {
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
                    {data.map((hintdata, index) => {
                        return (
                            <Tr key={hintdata.id}>
                                <Td>{index + 1}</Td>
                                <Td>{hintdata.username}</Td>
                                <Td>******</Td>
                                <Td>{hintdata.catalog}</Td>
                                <Td>{hintdata.hint}</Td>
                                <Td>
                                    <Flex alignItems="center" gap="2">
                                        <Icon
                                            as={MdCreate}
                                            cursor="pointer"
                                            onClick={() =>
                                                openEditHintForm({
                                                    username: hintdata.username,
                                                    catalog: hintdata.catalog,
                                                    hint: hintdata.hint,
                                                    id: hintdata.id
                                                })
                                            }
                                        />
                                        <Icon as={MdDelete} cursor="pointer" onClick={() => openDeleteHintForm(hintdata)} />
                                        <Icon as={TbLocationSearch} cursor="pointer" onClick={() => openDeleteHintForm(hintdata)} />
                                    </Flex>
                                </Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default HintDataList
