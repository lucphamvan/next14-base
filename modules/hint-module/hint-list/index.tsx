import Loading from "@/design-system/loading"
import useColor from "@/hook/useColor"
import { MediaQuery, useMediaQuery } from "@/hook/useMediaQuery"
import { HintData } from "@/model/hintdata"
import { Flex, Grid, GridItem, Icon, Tooltip } from "@chakra-ui/react"
import { Fragment } from "react"
import { MdCreate, MdDelete } from "react-icons/md"
import { TbLocationSearch } from "react-icons/tb"

import { mobileHeader, tableHeader } from "./column"

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
    const isMobile = useMediaQuery(MediaQuery.Mobile)
    const header = isMobile ? mobileHeader : tableHeader
    if (isLoading) {
        return <Loading boxSize={30} />
    }

    return (
        <>
            <Grid gap={4} templateColumns={!isMobile ? "30px 1fr 1fr 1fr 1fr 1fr" : "30px 2fr 1fr"}>
                {header.map((header, index) => (
                    <GridItem key={header + index}>{header}</GridItem>
                ))}
            </Grid>
            <Grid gap={4} templateColumns={!isMobile ? "30px 1fr 1fr 1fr 1fr 1fr" : "30px 2fr 1fr"}>
                {data.map(({ id, username, catalog, hint }, index) => {
                    return (
                        <Fragment key={id}>
                            <GridItem>{index + 1}</GridItem>
                            <GridItem>{username}</GridItem>
                            {!isMobile && <GridItem>&#9679;&#9679;&#9679;&#9679;&#9679;</GridItem>}
                            {!isMobile && <GridItem>{catalog}</GridItem>}
                            {!isMobile && <GridItem>&#9679;&#9679;&#9679;&#9679;&#9679;</GridItem>}
                            <GridItem>
                                <Flex alignItems="center" gap="3">
                                    <TooltipIcon
                                        icon={TbLocationSearch}
                                        onClick={() => openValidateHintForm({ id, username, catalog, hint })}
                                        label="Verify"
                                    />
                                    <TooltipIcon icon={MdCreate} onClick={() => openEditHintForm({ id, username, catalog, hint })} label="Update" />
                                    <TooltipIcon icon={MdDelete} onClick={() => openDeleteHintForm({ id, username, catalog, hint })} label="Delete" />
                                </Flex>
                            </GridItem>
                        </Fragment>
                    )
                })}
            </Grid>
        </>
    )
}

export default HintDataList
