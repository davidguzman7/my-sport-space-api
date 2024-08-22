import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query, ValidationPipe } from '@nestjs/common';
import { CreatePlayerDTO } from './dto/player.dto';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {

    constructor(private playerService: PlayerService) { }

    @Post('/create')
    async createPost(@Body(new ValidationPipe({ transform: true, whitelist: true })) createPlayerDTO: CreatePlayerDTO) {
        console.log(createPlayerDTO);
        const player = await this.playerService.createPlayer(createPlayerDTO);
        return player;
    }

    @Get('/')
    async getPlayers(@Res() res) {
        const players = await this.playerService.getPlayers();
        return res.status(HttpStatus.OK).json({
            players
        })
    }

    @Get('/:playerID')
    async getPlayer(@Res() res, @Param('playerID') playerID) {
        const player = await this.playerService.getPlayer(playerID);
        if (!player) throw new NotFoundException('Player Does not exist');
        return res.status(HttpStatus.OK).json(player);
    }

    @Delete('/')
    async deletePlayer(@Res() res, @Query('playerID') playerID) {
        const deletedPlayer = await this.playerService.deletePlayer(playerID);
        if (!deletedPlayer) throw new NotFoundException('Player Does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Player Deleted Successfully',
            deletedPlayer
        });
    }

    @Put('/')
    async updatePlayer(@Res() res, @Body() createPlayerDTO: CreatePlayerDTO, @Query('playerID') playerID) {
        const updatedPlayer = await this.playerService.updatePlayer(playerID, createPlayerDTO);
        if (!updatedPlayer) throw new NotFoundException('Player Does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'Player Updated Successfully',
            updatedPlayer
        });
    }

}
