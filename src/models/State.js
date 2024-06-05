import { prisma } from  '../../config/prisma.js'

//create (insert) data
export const createState = async (name) => {
    return await prisma.states.create({
        data: {name}
    })
}

//create (select) all

export const findAllStates = async () => {
    return await prisma.state.findMany()
}

//read (select by  id or other field)

export const findStatesByid = async () => {
    return await prisma.state.findUnique({
        where: {id: stateId}
    })
}

//update data

export const updateState = async (id, data) => {
    return await prisma.state.update({
        where: {
            id
        },
        data: {
            name: data.name
        }
    })
}

//delete data

export const deleteState = async(id) => {
    return await prisma.state.delete({
        where: {
            id
        }
    })
}