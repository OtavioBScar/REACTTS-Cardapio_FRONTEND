import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const API_URL = 'http://localhost:8080'

const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data)
    return response
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
// to invalidate on success the previous query with key: food-data, which is the get query in useFoodData, this is being used to update de prev get into a new one when performing a successfully post
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data']) //no prob with the error, running whatever
        }
    })

    return mutate
}