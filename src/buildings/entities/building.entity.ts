// export class Building {}
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { Document } from 'mongoose';
import { IBuilding } from './building.schema';





export type BuildingDocument = HydratedDocument<Building>;


@Schema()
export class Building extends Document<IBuilding> {
  @Prop()
  title: string;

  @Prop()
  price: number;
}


export const BuildingSchema = SchemaFactory.createForClass(Building);