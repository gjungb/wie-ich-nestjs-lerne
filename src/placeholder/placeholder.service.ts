import { User } from '.prisma/client';
import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PlaceholderService {
  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private readonly client: HttpService) {}

  readUsers(): Observable<User[]> {
    const url = `${this.BASE_URL}/users`;

    return this.client.get<User[]>(url).pipe(map((res) => res.data));
  }
}
