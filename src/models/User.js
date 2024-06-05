import { Prisma } from "../../config/prisma.js";

export const createUser = async(data, stateId) => {
    return await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            passwordHash: data.passwordHash,
            token: data.token,
            state: {
                connect: {
                    id: stateId
                }
            }
        }
    })
}
export const findUserByEmail = async(email) => {
    return await prisma.user.findUnique({
        where: {
            email: email
        },
        include: {
            state: true
        }
    })
}
export const findAllUsers = async () => {
    return await prisma.user.findMany({
        include: {states: true }
    })
}
