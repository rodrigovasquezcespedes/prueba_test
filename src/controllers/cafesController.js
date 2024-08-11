import cafes from '../models/cafesModel.json' assert { type: 'json' } //me marca error en la importacion de json sin definir el tipo con import en node version 20.16

export const getCafes = (req, res) => {
  res.status(200).json(cafes)
}

export const deleteCafe = (req, res) => {
  const { id } = req.params
  const cafe = cafes.find(c => c.id === parseInt(id))
  if (!cafe) return res.status(404).send('Café no encontrado')
  res.status(204).send()
}

export const addCafe = (req, res) => {
  const nuevoCafe = req.body
  cafes.push(nuevoCafe)
  res.status(201).json(nuevoCafe)
}

export const updateCafe = (req, res) => {
  const { id } = req.params
  const { id: idBody } = req.body
  if (parseInt(id) !== idBody) return res.status(400).send('IDs no coinciden')
  res.status(200).json(req.body)
}
