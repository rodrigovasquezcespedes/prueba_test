import request from 'supertest'
import app from '../app.js'

describe('API Cafetería Nanacao', () => {
  test('GET /cafes devuelve un status 200 y un arreglo con al menos 1 objeto', async () => {
    const response = await request(app).get('/cafes').send()
    expect(response.statusCode).toBe(200)
    // expect(response.statusCode).toBe(400)
    expect(response.body).toBeInstanceOf(Array)
    // expect(response.body).toBeInstanceOf(Object)
    expect(response.body.length).toBeGreaterThan(0)
    // expect(response.body.length).toBe(0)
  })

  test('DELETE /cafes/:id devuelve 404 al intentar eliminar un café con un id inexistente', async () => {
    const id = Math.floor(Math.random() * 101)
    // const id = 1
    const response = await request(app).delete(`/cafes/${id}`)
    expect(response.statusCode).toBe(404)
    // expect(response.statusCode).toBe(200)
  })

  test('POST /cafes agrega un nuevo café y devuelve un código 201', async () => {
    const nuevoCafe = { id: 6, nombre: 'Café Expreso' }
    // const nuevoCafe = { id: 6 }
    const response = await request(app).post('/cafes/').send(nuevoCafe)
    expect(response.statusCode).toBe(201)
    // expect(response.statusCode).toBe(400)
    expect(response.body).toMatchObject(nuevoCafe)
  })

  test('PUT /cafes/:id devuelve 400 si los ids no coinciden', async () => {
    const cafeActualizado = { id: 2, nombre: 'Café Mocha' }
    // const cafeActualizado = { id: 1, nombre: 'Café Mocha' }
    const response = await request(app).put('/cafes/1').send(cafeActualizado)
    expect(response.statusCode).toBe(400)
    // expect(response.statusCode).toBe(200)
  })
})
