import { JSONValueType } from '@jsonhero/json-infer-types/lib/@types';

export interface ParsedObject {
  values: Values;
  structure: Structure;
}

export interface Values {
  rootPath: string;
  values: ValueCollection;
}

export interface ValueCollection {
  [path: string]: ValueInfo;
}

export interface ValueInfo {
  path: string;
  name: string;
  displayName: string;
  value: any;
  type: JSONValueType;
  children: string[] | null;
}

export interface Structure {
  rootPath: string;
  values: StructureCollection;
}

export interface StructureCollection {
  [path: string]: StructureInfo;
}

export interface StructureInfo {
  path: string;
  name: string;
  displayName: string;
  type: JSONValueType;
  children: string[] | null;
}
