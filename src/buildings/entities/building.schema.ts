import mongoose, { Schema, Document, mongo } from 'mongoose';


export interface IBuilding extends Document {
    title: string;
    price: number;
}



export const BuildingSchema = new Schema<IBuilding>({
    title: { type: String, required: true },
    price: { type: Number, required: true}
});



