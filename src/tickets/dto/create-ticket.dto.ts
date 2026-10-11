import {IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString,IsPhoneNumber,MinLength} from "class-validator";  
import { TicketCategory, TicketPriority, TicketStatus } from "../schemas/ticket.schema.js";

export class CreateTicketDto {
  @IsString({ message: 'اسم الطالب يجب أن يكون نصاً' })
  @IsNotEmpty({ message: 'اسم الطالب مطلوب' })
  @MinLength(3, { message: 'اسم الطالب يجب أن يكون 3 أشكال/حروف على الأقل' })
  studentName: string;

  @IsEmail({}, { message: 'البريد الإلكتروني غير صحيح' })
  @IsNotEmpty({ message: 'البريد الإلكتروني مطلوب' })
  studentEmail: string;

  // التحقق من رقم الهاتف (يمكن تخصيص الدولة مثل 'EG' لمصر أو تركها مرنة)
  @IsString({ message: 'رقم الهاتف يجب أن يكون نصاً' })
  @IsNotEmpty({ message: 'رقم الهاتف مطلوب' })
  @IsPhoneNumber('EG', { message: 'رقم الهاتف يجب أن يكون رقم هاتف مصري صحيح' })
  studentPhone: string;

  @IsString({ message: 'عنوان الشكوى يجب أن يكون نصاً' })
  @IsNotEmpty({ message: 'عنوان الشكوى مطلوب' })
  @MinLength(5, { message: 'عنوان الشكوى يجب أن يكون 5 حروف على الأقل' })
  subject: string;

  @IsString({ message: 'تفاصيل الشكوى يجب أن تكون نصاً' })
  @IsNotEmpty({ message: 'تفاصيل الشكوى مطلوبة' })
  @MinLength(10, { message: 'تفاصيل الشكوى يجب أن تكون 10 حروف على الأقل' })
  description: string;

  // التحقق من الـ Enums بالعربي
  @IsOptional()
  @IsEnum(TicketCategory, { message: 'تصنيف الشكوى غير صالحة' })
  category?: TicketCategory;

  @IsOptional()
  @IsEnum(TicketPriority, { message: 'أولوية الشكوى غير صالحة' })
  priority?: TicketPriority;

  @IsOptional()
  @IsEnum(TicketStatus, { message: 'حالة الشكوى غير صالحة' })
  status?: TicketStatus;
}