export type Shape = {
  id: string;
  value: string;
};

export type Shapes = Map<string, Shape>;

export interface ShapesDict {
  [key: string]: Shape;
}
