import { auth } from "@/app/api/auth/[...nextauth]/config"
import { getTasks } from "@/service/task.service"

import Page from "./loading"
import PageView from "./view/page-view"

const TaskPage = async () => {
    const authen = await auth()
    const data = await getTasks(authen!.accessToken)
    return <PageView initTasks={data.items} />
}

export default TaskPage
