export interface DefaultControllerProperties {
  getById(id: string): unknown;
  getAll(page: number): Promise<unknown[]>;
  save(value: unknown): void;
  update(id: string, value: unknown): void;
  delete(id: string): void;
}
