import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Match {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	player1: number;

	@Column()
	player2: number;

	@Column({ nullable: true })
	player1Score: number;

	@Column({ nullable: true })
	player2Score: number;

	@Column({ nullable: true })
	winner: number;
}
