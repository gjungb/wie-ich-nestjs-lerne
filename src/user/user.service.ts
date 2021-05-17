import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
  constructor(private readonly db: DbService) {}

  readUsers() {
    const users = this.db.user.findMany();

    return from(users);
  }
}
