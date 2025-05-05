import { Injectable, NotFoundException } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Place } from './entities/place.entity';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  private places: Place[] = [];

  constructor() {
    this.seedPlaces(10);
  }

  private seedPlaces(count: number) {
    for (let i = 0; i < count; i++) {
      this.places.push({
        id: faker.string.uuid(),
        name: faker.location.city(),
        country: faker.location.country(),
        street: faker.location.streetAddress(),
        latitude: faker.location.latitude().toString(),
        longitude: faker.location.longitude().toString(),
        description: faker.lorem.sentence(),
      });
    }
  }

  findAll(): Place[] {
    return this.places;
  }

  findOne(id: string): Place {
    const place = this.places.find((p) => p.id === id);
    if (!place) throw new NotFoundException('Place not found');
    return place;
  }

  create(dto: CreatePlaceDto): Place {
    const place: Place = {
      id: faker.string.uuid(),
      ...dto,
    };
    this.places.push(place);
    return place;
  }

  update(id: string, dto: UpdatePlaceDto): Place {
    const place = this.findOne(id);
    const updated = { ...place, ...dto };
    const index = this.places.findIndex((p) => p.id === id);
    this.places[index] = updated;
    return updated;
  }

  delete(id: string): void {
    const index = this.places.findIndex((p) => p.id === id);
    if (index === -1) throw new NotFoundException('Place not found');
    this.places.splice(index, 1);
  }
}
