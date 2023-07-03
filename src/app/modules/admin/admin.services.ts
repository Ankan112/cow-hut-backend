import config from '../../../config'
// import ApiError from '../../../errors/ApiError'
import { IAdmin } from './admin.interface'
import { Admin } from './admin.model'
import bcrypt from 'bcrypt'

const createAdmin = async (admin: IAdmin): Promise<IAdmin> => {
  // hash password
  admin.password = await bcrypt.hash(
    admin.address,
    Number(config.bcrypt_salt_rounds)
  )
  const createdAdmin = await Admin.create(admin)
  return createdAdmin
}

export const AdminService = {
  createAdmin,
}
