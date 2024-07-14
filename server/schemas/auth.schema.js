import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string({ required_error: 'Username ir required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ required_error: 'Invalid email' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, { message: 'Password must be at 8 characters' }),
});

export const loginSchema = z.object({
  username: z.string({ required_error: 'Username not found' }),
  password: z
    .string({ required_error: 'Password is required' })
    .min(8, { message: 'Password must be at 8 characters' }),
});
