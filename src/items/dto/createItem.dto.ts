export class CreateItemDto {
  readonly id?: string;
  readonly name: string;
  readonly quantity: number;
  readonly description?: string;
}
