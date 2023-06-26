import { SortOrder } from 'mongoose'
import ApiError from '../../../errors/ApiError'
import { paginationHelpers } from '../../../helpers/paginationHelper'
import { IPaginationOptions } from '../../../interfaces/pagination'
import { ICow } from './cow.interface'
import { Cow } from './cow.model'

const createCow = async (cow: ICow): Promise<ICow> => {
  if (!cow.label) {
    cow.label = 'for sale'
  }
  const createdCow = await Cow.create(cow)
  if (!createdCow) {
    throw new ApiError(400, 'Failed to create cow !')
  }
  return createdCow
}

type IGenericResponseForCow<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}

type ICowFilters = {
  searchTerm?: string
}

const getAllCow = async (
  filters: ICowFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponseForCow<ICow[]>> => {
  const { searchTerm, ...filtersData } = filters

  const andConditions = []
  const searchableFields = ['location', 'breed', 'category']
  if (searchTerm) {
    andConditions.push({
      $or: searchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  const { page, limit, skip, sortBy, sortOrder, minPrice, maxPrice } =
    paginationHelpers.calculatePagination(paginationOptions)
  const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {}
  const finalCondition =
    minPrice > 0 || maxPrice > 0
      ? { price: { $gte: minPrice, $lte: maxPrice } }
      : whereCondition
  const sortConditions: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder
  }
  const result = await Cow.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit)
  const total = await Cow.countDocuments()
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

const getSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findById({ _id: id })
  return result
}

const deleteCow = async (id: string) => {
  const result = await Cow.deleteOne({ _id: id })
  return result
}

const updateCow = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const result = await Cow.findOneAndUpdate({ _id: id }, payload, { new: true })
  return result
}

export const CowService = {
  createCow,
  getAllCow,
  getSingleCow,
  deleteCow,
  updateCow,
}
