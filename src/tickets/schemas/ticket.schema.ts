
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomUUID } from 'crypto';
export type TicketDocument = HydratedDocument<Ticket>;
export enum TicketCategory {
  Academic = 'أكاديمي',
  Financial = 'مالي',
  Administrative = 'إداري',
  Services = 'خدمات وتجهيزات',
  Other = 'أخرى',
}

export enum TicketPriority {
  Low = 'منخفضة',
  Medium = 'متوسطة',
  High = 'عالية',
  Urgent = 'عاجلة',
}

export enum TicketStatus {
  Open = 'قيد الانتظار',
  InProgress = 'قيد المعالجة',
  Resolved = 'تم الحل',
  Closed = 'مغلقة',
  Rejected = 'مرفوضة',
}

@Schema({ timestamps: true })
export class Ticket {
  @Prop({
    unique: true,
    default: () => `TCK-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`,
  })
  ticketNumber: string;

  @Prop({
    required: true,
    default: () => randomUUID(), 
  })
  accessSecret: string;

  @Prop({ required: true, trim: true })
  studentName: string;

  @Prop({ required: true, trim: true, lowercase: true })
  studentEmail: string;

  @Prop({ required: true, trim: true })
  studentPhone: string;

  @Prop({ required: true, trim: true })
  subject: string;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({
    type: String,
    enum: TicketCategory,
    default: TicketCategory.Other,
  })
  category: TicketCategory;

  @Prop({
    type: String,
    enum: TicketPriority,
    default: TicketPriority.Medium,
  })
  priority: TicketPriority;

  @Prop({
    type: String,
    enum: TicketStatus,
    default: TicketStatus.Open,
  })
  status: TicketStatus;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);