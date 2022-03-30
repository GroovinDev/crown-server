// Boring imports
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Resources
import { UserModule } from './user/user.module';
import { MatchModule } from './match/match.module';

@Module({
	imports: [TypeOrmModule.forRoot(), UserModule, MatchModule],
})
export class AppModule {}
