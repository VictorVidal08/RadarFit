import { z } from 'zod';

const ProductZodSchema = z.object({
  produto: z.string({
    required_error: 'Product is required',
    invalid_type_error: 'Product must be a string',
  }),
  valor: z.number({
    required_error: 'Value is required',
    invalid_type_error: 'Value must be a number',
  }).gte(1).lte(100000),
  descricao: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }).min(3, { message: 'Description must be 3 or more characters long' }),
  created: z.date({
    invalid_type_error: 'created must be a date',
  }).optional(), 
  updated: z.date({
    invalid_type_error: 'updated must be a date',
  }).optional(),
});

export type IProduct = z.infer<typeof ProductZodSchema>;

export default ProductZodSchema;
