import { Router } from 'express'


const router = Router()

router.get('/posts',(req,res) => {
    res.json({ msg: 'Hello from Posts API'
    })
})


// router.use('/api',posts)

export default router