import { Injectable, Logger } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TestService {

  private readonly logger = new Logger(TestService.name);

  constructor(private readonly httpService: HttpService) {

  }

  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  async findAll() {
    this.logger.log('Fetching all tests');
    try {
      const apiUrl = new URL('http://swapi.dev');
      apiUrl.pathname = '/api/people/1/';

      const response = await this.httpService.axiosRef.get(apiUrl.href);

      return response.data;

    } catch (error) {
      this.logger.error(error.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
