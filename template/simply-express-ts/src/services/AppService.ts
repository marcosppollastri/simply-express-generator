import { AppData, AppResponse } from '@src/interfaces'
export async function AppService(data: AppData): Promise<AppResponse>{
    return {
        response: `Hello world! Your data is ${JSON.stringify(data)}`
    }
}