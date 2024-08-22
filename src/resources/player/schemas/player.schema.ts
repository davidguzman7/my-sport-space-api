import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema({ timestamps: true, versionKey: false })
export class Player {
  @Prop({ type: String, default: "New Player" })
  name: string;

  @Prop()
  position: number;

  @Prop()
  speed: number;

  @Prop()
  strength: number;

  @Prop()
  ability: number;

  @Prop()
  effectiveness: number;

  @Prop()
  fieldVision: number;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
PlayerSchema.index({ name: 1 })