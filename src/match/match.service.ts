import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match } from './entities/match.entity';

@Injectable()
export class MatchService {
	constructor(
		@InjectRepository(Match)
		private readonly matchRepository: Repository<Match>,
	) {}

	create(createMatchDto: CreateMatchDto) {
		var match = new Match();

		// Set the players
		match.player1 = createMatchDto.player1;
		match.player2 = createMatchDto.player2;

		// Save the match
		return this.matchRepository.save(match);
	}

	findAll() {
		return `This action returns all match`;
	}

	findOne(id: number) {
		return `This action returns a #${id} match`;
	}

	update(id: number, updateMatchDto: UpdateMatchDto) {
		return `This action updates a #${id} match`;
	}

	remove(id: number) {
		return `This action removes a #${id} match`;
	}
}
