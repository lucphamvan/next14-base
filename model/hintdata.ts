export interface HintData {
    id: string
    username: string
    hint: string
    catalog: string
}

export interface HintFormDataInput {
    id?: string
    username: string
    hint: string
    catalog: string
    password?: string
    confirmPassword?: string
}

export interface VerifyHintPassResponse {
    isMatch: boolean
}
