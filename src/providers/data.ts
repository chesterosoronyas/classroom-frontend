import {BaseRecord, DataProvider, GetListParams, GetListResponse} from "@refinedev/core";
import {mockSubjects} from "@/constants/mock-data.ts";


export const dataProvider: DataProvider = {
    getList: async <TData extends BaseRecord = BaseRecord>({ resource }: GetListParams): Promise<GetListResponse<TData>> => {
        if (resource !== "subjects") {
            return {
                data: [] as TData[],
                total: 0,
            };
        }

        return {
            data: mockSubjects as unknown as TData[],
            total: mockSubjects.length,
        };
    },
    getOne: async () => {
        throw new Error("getOne is not implemented in the mock data provider");
    },
    create: async () => {
        throw new Error("create is not implemented in the mock data provider");
    },
    update: async () => {
        throw new Error("update is not implemented in the mock data provider");
    },
    deleteOne: async () => {
        throw new Error("deleteOne is not implemented in the mock data provider");
    },
    getApiUrl: () => "",
}