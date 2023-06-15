// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { BuildingsModule } from './buildings/buildings.module';
// import { CategoriesModule } from './categories/categories.module';
// import { BookingsModule } from './bookings/bookings.module';
// import { CommentsModule } from './comments/comments.module';
// import { AttributesModule } from './attributes/attributes.module';
// import { AttributeValuesModule } from './attribute-values/attribute-values.module';
// import { FavouritesModule } from './favourites/favourites.module';
// import { PaymentsModule } from './payments/payments.module';
// import { AuthModule } from './auth/auth.module';
// import { MongooseModule } from "@nestjs/mongoose"



// @Module({
//   imports: [
    
//     MongooseModule.forRoot('mongodb+srv://hayotbekabdulazizov2005:hayotbek@cluster0.xxdbd6r.mongodb.net/?retryWrites=true&w=majority'),
//     AuthModule,
//     BuildingsModule,
//     // MongooseModule.forRoot('mongodb://localhost:27017/dachchilo-nest'),
        
//     // UsersModule,
//     // CategoriesModule, 
//     // BookingsModule, 
//     // CommentsModule, 
//     // AttributesModule, 
//     // AttributeValuesModule, 
//     // FavouritesModule, 
//     // PaymentsModule, 
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

















import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secret1',
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AppModule {}