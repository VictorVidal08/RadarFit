import { z } from 'zod';

const ProductZodSchema = z.object({
  produto: z.string({
    required_error: 'Product is required',
    invalid_type_error: 'Product must be a string',
  }),
  valor: z.number({
    required_error: 'Value is required',
    invalid_type_error: 'Value must be a number',
  }).int().gte(10).lte(10000),
  descricao: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }).min(3, { message: 'Description must be 3 or more characters long' }),
  created: z.date({
    invalid_type_error: 'created must be a date',
  }), 
  updated: z.date({
    invalid_type_error: 'updated must be a date',
  }),
});

export type IProduct = z.infer<typeof ProductZodSchema>;

export default ProductZodSchema;
