export type Shape = {
  id: string;
  value: string;
  type: ShapeType;
};

export type Shapes = Map<string, Shape>;

export interface ShapesDict {
  [key: string]: Shape;
}

export enum ShapeType {
  A = "A",
  B = "B",
  C = "C",
}
