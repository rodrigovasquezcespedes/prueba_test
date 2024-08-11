import { Router } from 'express'
import {
  getCafes,
  deleteCafe,
  addCafe,
  updateCafe
} from '../controllers/cafesController.js'

const router = Router()

router.get('/cafes', getCafes)
router.delete('/cafes/:id', deleteCafe)
router.post('/cafes', addCafe)
router.put('/cafes/:id', updateCafe)

export default router
