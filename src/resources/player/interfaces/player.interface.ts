import { Document } from 'mongoose';

export interface Player extends Document {
    name: string;
    position: number;
    speed: number;
    strength: number;
    ability: number;
    effectiveness: number;
    fieldVision: number;
    createdAt: Date;
}