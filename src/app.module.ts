import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    JwtModule,
    AuthModule,
    ImageModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
