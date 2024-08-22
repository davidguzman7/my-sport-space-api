import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './interfaces/player.interface';
import { CreatePlayerDTO } from './dto/player.dto';

@Injectable()
export class PlayerService {
    constructor(@InjectModel('Player') readonly playerModel: Model<Player>) { }

    async getPlayers(): Promise<Player[]> {
        const players = await this.playerModel.find()
        return players;
    }

    async getPlayer(playerID: string): Promise<Player> {
        const player = await this.playerModel.findById(playerID);
        return player;
    }

    async createPlayer(createPlayerDTO: CreatePlayerDTO): Promise<Player> {
        const player = new this.playerModel(createPlayerDTO);
        return await player.save();
    }

    async deletePlayer(playerID: string): Promise<Player> {
        const deletedPlayer = await this.playerModel.findByIdAndDelete(playerID);
        return deletedPlayer;
    }

    async updatePlayer(playerID: string, createPlayerDTO: CreatePlayerDTO): Promise<Player> {
        const updatedPlayer = await this.playerModel.findByIdAndUpdate(playerID, createPlayerDTO, { new: true });
        return updatedPlayer;
    }
}
