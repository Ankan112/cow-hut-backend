import { Schema, model } from 'mongoose'
import { UserRole } from '../../../enums/commonEnums'
import { AdminModel, IAdmin } from './admin.interface'

const adminSchema = new Schema<IAdmin>(
  {
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: [UserRole.ADMIN],
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)
export const Admin = model<IAdmin, AdminModel>('Admin', adminSchema)
