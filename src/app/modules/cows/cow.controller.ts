import { RequestHandler } from 'express'
import { CowService } from './cow.services'
import pick from '../../../shared/pick'
import { paginationFields } from '../../../constants/pagination'

const createCow: RequestHandler = async (req, res, next) => {
  try {
    const { cow } = req.body
    const result = await CowService.createCow(cow)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cow created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const getAllCow: RequestHandler = async (req, res, next) => {
  const filters = pick(req.query, ['searchTerm', 'location'])
  const paginationOptions = pick(req.query, paginationFields)
  // console.log(paginationOptions)

  try {
    const result = await CowService.getAllCow(filters, paginationOptions)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cows retrieved successfully',
      meta: {
        page: result.meta.page,
        limit: result.meta.limit,
        count: result.meta.total,
      },
      data: result.data,
    })
  } catch (err) {
    next(err)
  }
}

const getSingleCow: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await CowService.getSingleCow(id)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cow retrieved successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const deleteCow: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await CowService.deleteCow(id)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cow deleted successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

const updateCow: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id
    const payload = req.body
    const result = await CowService.updateCow(id, payload)
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Cow updated successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const CowController = {
  createCow,
  getAllCow,
  getSingleCow,
  deleteCow,
  updateCow,
}
