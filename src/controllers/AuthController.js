export const signup = async (req, res) => {
    try{
       const data = req.body
       const user = await findUserByEmail(data.email)
       if (user) {
        res.json({
            error:" Email already exists"
        })
        return
       }
    }catch (error) {
        res
        .status(500)
        .json({error: "failed to create user", message: error})
    }
}