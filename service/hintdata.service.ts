import { API, api } from "@/config/api"
import { HintData, HintFormDataInput } from "@/model/hintdata"

import { withToken } from "./utils"

export const createHintData = async (data: HintFormDataInput, token: string) => {
    const response = await api.post(API.HINTDATA, data, withToken(token))
    return response.data as HintData
}

export const getListHintData = async (token: string, limit?: number, offset?: number) => {
    let option = withToken(token)
    if (limit) {
        option = { ...option, params: { limit, offset } }
    }
    const response = await api.get(API.HINTDATA, option)
    return response.data as GetListResponse<HintData>
}

export const getHintData = async (id: string, token: string) => {
    const response = await api.get(API.HINTDATA + "/" + id, withToken(token))
    return response.data as HintData
}

export const updateHintData = async (data: Partial<HintFormDataInput>, token: string) => {
    const response = await api.patch(API.HINTDATA, data, withToken(token))
    return response.data as HintData
}

export const deleteHintData = async (id: string, token: string) => {
    const response = await api.delete(API.HINTDATA + "/" + id, withToken(token))
    return response.data
}
