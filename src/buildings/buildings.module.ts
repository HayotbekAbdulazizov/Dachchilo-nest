import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsController } from './buildings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Building } from './entities/building.entity';
import { BuildingSchema } from './entities/building.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Building.name, schema: BuildingSchema }]),
  ],
  controllers: [BuildingsController],
  providers: [BuildingsService,]
})

export class BuildingsModule {}
