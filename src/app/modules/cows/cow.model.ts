import { Schema, model } from 'mongoose'
import { CowModel, ICow } from './cow.interface'
import { Breeds, Category, Cities, Label } from '../../../enums/commonEnums'

const cowSchema = new Schema<ICow>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    enum: [
      Cities.Dhaka,
      Cities.Chattogram,
      Cities.Rajshahi,
      Cities.Barishal,
      Cities.Sylhet,
      Cities.Comilla,
      Cities.Rangpur,
      Cities.Mymensingh,
    ],
    required: true,
  },
  breed: {
    type: String,
    enum: [
      Breeds.Brahman,
      Breeds.Nellore,
      Breeds.Sahiwal,
      Breeds.Gir,
      Breeds.Indigenous,
      Breeds.Tharparkar,
      Breeds.Kankrej,
    ],
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    enum: [Label.ForSale, Label.SoldOut],
    required: true,
  },
  category: {
    type: String,
    enum: [Category.Dairy, Category.Beef, Category.DualPurpose],
    required: true,
  },
  seller: {
    type: String,
    required: true,
  },
})

export const Cow = model<ICow, CowModel>('Cow', cowSchema)
