"use client"

import { Button, FormGroup, Input } from "@/design-system"
import { useNotify } from "@/design-system/toast"
import { CreateTaskRequest, TaskStatus } from "@/model/task"
import { createTask } from "@/service/task.service"
import { Box, Flex } from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
    name: z.string().min(1, "Name is required")
})

interface Props {
    fetchTasks: () => Promise<void>
}
const FormView = ({ fetchTasks }: Props) => {
    const session = useSession()
    const { notify } = useNotify()
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: any) => {
        try {
            const input: CreateTaskRequest = {
                name: data.name,
                status: TaskStatus.TODO
            }
            await createTask(input, session.data?.accessToken || "")
            notify("success", "create task successfully")
            reset()
            await fetchTasks()
        } catch (error: any) {
            notify("error", "Error", error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="false">
            <Flex gap="4" w="100%">
                <FormGroup errors={errors} name="name">
                    <Input {...register("name")} placeholder="Insert your task" variant="outline" flexGrow={1} />
                </FormGroup>
                <Box>
                    <Button type="submit" w="max-content" disabled={isSubmitting}>
                        Add task
                    </Button>
                </Box>
            </Flex>
        </form>
    )
}

export default FormView
